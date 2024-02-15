USE [Enterprise32]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
DECLARE @CurrentDate DATE;
SET @CurrentDate = GETDATE();
SELECT S.ShipmentNumber AS ShipmentID, 
CASE
	WHEN P.ShipDate IS NULL THEN @CurrentDate
	WHEN P.ShipDate = '1900-01-01 00:00:00.000' THEN @CurrentDate
	ELSE P.ShipDate
END AS NoticeDate,
CASE 
	WHEN (CHARINDEX('UPS ', SVS.Description) > 0) THEN REPLACE(SVS.Description, 'UPS ', '') 
	WHEN (CHARINDEX('FedEx ', SVS.Description) > 0) THEN REPLACE(SVS.Description, 'FedEx ', '') 
	WHEN (CHARINDEX('USPS', SVS.Description) > 0) THEN 'USPS' 
	WHEN (CHARINDEX('Will Call', SVS.Description) > 0) THEN 'Out of Shop' 
	ELSE 'Other' 
END AS ServiceLevel, 
CASE 
	WHEN (CHARINDEX('UPS', SVS.Description) > 0) THEN 'UPS' 
	WHEN (CHARINDEX('USPS', SVS.Description) > 0) THEN 'USPS' 
	WHEN (CHARINDEX('FedEx', SVS.Description) > 0) THEN 'FedEx' 
	ELSE 'Other' 
END AS CarrierIdentifier, 
P.ShipDate AS xNoticeDate, 
SVS.Description AS xServiceLevel, 
SV.Description AS xCarrierIdentifier, 
P.TrackingNumber AS ShipmentIdentifier, OH.OutsideOrderID AS OrderID, ISNULL
                             ((SELECT        SUM(ISNULL(FreightCost, 0) + ISNULL(HandlingCost, 0) + ISNULL(PostageCost, 0)) AS Expr1
                                 FROM            Package AS P
                                 WHERE        (S.ShipmentNumber = ShipmentNumber)), 0) AS ShipCost,
                             (SELECT        SUM(ISNULL(TotalQtyShipped, 0)) AS Expr1
                               FROM            Package AS P
                               WHERE        (S.ShipmentNumber = ShipmentNumber)) AS Quantity, CASE WHEN P.ComponentNumber = 0 THEN 1 ELSE P.ComponentNumber END AS LineNumber, P.PackageID, S.JobNumber, OH.CustName, 
                         OH.JobDescription, OH.JobStatus
FROM            OrderHeader AS OH LEFT OUTER JOIN
                         Shipment AS S ON OH.JobNumber = S.JobNumber LEFT OUTER JOIN
                         Package AS P ON P.PackageID =
                             (SELECT        TOP (1) PackageID
                               FROM            Package AS P1
                               WHERE        (S.ShipmentNumber = ShipmentNumber)
                               ORDER BY PackageID) LEFT OUTER JOIN
                         ShipViaService AS SVS ON SVS.Code = CASE WHEN Len(S.ShipViaService) > 0 THEN S.ShipViaService ELSE P.ShipViaService END AND SVS.ShipViaCode = CASE WHEN Len(S.ShipVia) 
                         > 0 THEN S.ShipVia ELSE P.ShipMethod END LEFT OUTER JOIN
                         ShipVia AS SV ON SV.Code = CASE WHEN Len(S.ShipVia) > 0 THEN S.ShipVia ELSE P.ShipMethod END INNER JOIN
                         Customer AS C ON OH.CustAccount = C.Account
WHERE        (LEN(OH.OutsideOrderID) > 0) AND (LEN(S.StarshipComments) = 0) AND (OH.JobStatus = 'Complete') OR
                         (LEN(OH.OutsideOrderID) > 0) AND (LEN(S.StarshipComments) = 0) AND (OH.JobStatus = 'In Process') AND (ISNULL(S.Shipped, 0) = 1)

