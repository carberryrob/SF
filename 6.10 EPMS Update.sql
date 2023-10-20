USE [Enterprise32Sandbox]
GO
/****** Object:  StoredProcedure [dbo].[sp_NewJobTicket2]    Script Date: 10/19/2023 11:12:05 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

 ALTER PROCEDURE [dbo].[sp_NewJobTicket2]   @JobNumber VARCHAR(20)  AS  SET NOCOUNT ON;  SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;  SELECT        OrderProcess.EstimateNumber, OrderProcess.JobNumber, OrderProcess.ComponentNumber, OrderProcess.GroupNo, OrderProcess.ItemNumber, OrderProcess.PartNumber, OrderProcess.ProcessCode, 
                         OrderProcess.MaterialCode, OrderProcess.Description, OrderProcess.Repetitions, OrderProcess.UnitsPerCycle, OrderProcess.Caliper, OrderProcess.BWT, OrderProcess.Width, OrderProcess.Length, 
                         OrderProcess.ParentOuts, OrderProcess.ParentSize, OrderProcess.PartialColors, OrderProcess.ColorsSide1, OrderProcess.ColorsSide2, OrderProcess.MarginalWord, OrderProcess.MarginalColor, 
                         OrderProcess.MarginalPosition, OrderProcess.PlateChange, OrderProcess.PlateVersion, OrderProcess.ChangeOrder, OrderProcess.WebSigs, OrderProcess.WebPages, OrderProcess.Sides AS wSides, 
                         OrderProcess.Color, OrderProcess.MComments, OrderProcess.SigWidth, OrderProcess.SigLength, OrderProcess.SigSize, OrderComponent.Description AS ComponentDescription, OrderComponent.Sides, 
                         OrderComponent.InksSide1, OrderComponent.InksSide2, OrderComponent.Lots, OrderComponent.PagesPerLot, OrderComponent.FinalWidth, OrderComponent.FinalLength, OrderComponent.PressWidth, 
                         OrderComponent.PressLength, OrderComponent.PressOuts, OrderComponent.RunMethod, OrderComponent.PartsToPrint, OrderComponent.RequireBleed, OrderComponent.DieNumber, OrderComponent.DieTeeth, 
                         OrderComponent.NoAcross, OrderComponent.NoAround, OrderComponent.FinalDepth, OrderComponent.ConsStartNo, OrderComponent.Encoding, OrderComponent.MissNumbNone, 
                         OrderComponent.MissNumbList, OrderComponent.FinalSize, OrderComponent.PressSize, OrderComponent.FinishWidth, OrderComponent.FinishLength, OrderComponent.FinishSize, 
                         OrderComponent.ParentWidth AS CParentWidth, OrderComponent.ParentLength AS CParentLength, OrderComponent.ParentOuts AS CParentOuts, OrderComponent.ParentSize AS CParentSize, 
                         OrderHeader.CustAccount, OrderHeader.CustName, OrderHeader.CustAddress1, OrderHeader.CustAddress2, OrderHeader.CustCity, OrderHeader.CustState, OrderHeader.CustZip, OrderHeader.CustPhone, 
                         OrderHeader.CustFax, OrderHeader.CustContact, OrderHeader.SalesRepCode, OrderHeader.CustCountry, OrderHeader.CustEmail, OrderHeader.EndUserName, OrderHeader.EndUserAccount, OrderHeader.CSR, 
                         OrderHeader.Estimator, OrderHeader.JobDescription, OrderHeader.PONumber, OrderHeader.PrevPONumber, OrderHeader.OriginalJobNumber, OrderHeader.DistPO, OrderHeader.PrevDistPO, 
                         OrderHeader.DueTime, OrderHeader.DueDate, OrderHeader.DueTimeText, OrderHeader.OrderDate, OrderHeader.ReleaseNumber, OrderHeader.OrderType, OrderHeader.ProofDate, OrderHeader.ProofTime, 
                         OrderHeader.ProofTimeText, OrderHeader.ProofComments, OrderHeader.Revision, OrderHeader.RevisionDate, OrderHeader.RevisionReason, OrderHeader.UserDefined1, OrderHeader.UserDefined2, 
                         OrderHeader.UserDefined3, OrderHeader.UserDefined4, OrderHeader.UserDefined5, OrderHeader.CustUserDefined1, OrderHeader.CustUserDefined2, OrderHeader.CustUserDefined3, 
                         OrderHeader.MJobDetailDescription, OrderHeader.Notes, OrderHeader.FormNumber, OrderHeader.TotalComponents, OrderQtyTable.Quantity, OrderQtyTable.QuantityLineNo, OrderQtyTable.TotalPrice, 
                         OrderValue.ProductionQuantity, OrderValue.MaterialQuantity, OrderValue.ProductionMinutes, OrderHeader.PrevJobNumber, OrderComponentText.PressInstructions, OrderComponentText.PPInstructions, 
                         OrderComponentText.ASInstructions, OrderComponentText.StockInstructions, OrderComponentText.PostInstructions, OrderComponentText.InkInstructions, OrderComponentText.DetailDescription, 
                         SalesRep.Description AS SalesRepName, OrderComponent.GrainCritical, OrderProcess.SheetSpoilage, Contact.Phone AS ContactPhone, Contact.Fax AS ContactFax, OrderHeader.NoProofRequired, 
                         OrderProcess.DueDate AS ProcessDueDate, OrderProcess.DueTime AS ProcessDueTime, OrderComponent.DueDate AS ComponentDueDate, OrderComponent.DueTime AS ComponentDueTime, 
                         OrderProcess.VendorID AS OrderVendorId, OrderComponent.FlexoDieCharge, OrderValue.ProductionPrice + OrderValue.MaterialPrice AS ProcessSellPrice, OrderProcess.DieNumber AS PDieNumber, 
                         OrderQtyTable.ManualPrice, OrderProcess.FormPartNumber, OrderInLineOp.InLineDesc, OrderInLineOp.InLineQty, OrderInLineOp.StitchLocation, OrderHeader.PlantID, 
                         OrderComponent.UserDefined1 AS CUserDefined1, OrderComponent.UserDefined2 AS CUserDefined2, OrderComponent.UserDefined3 AS CUserDefined3, OrderComponent.UserDefined4 AS CUserDefined4, 
                         OrderComponent.UserDefined5 AS CUserDefined5, Contact.CellPhone AS ContactCellPhone, Contact.HomePhone AS ContactHomePhone, Contact.Email AS ContactEmail, CustomFields.QuoteText1, 
                         CustomFields.QuoteText2, CustomFields.QuoteText3, CustomFields.QuoteText4, OrderComponent.TemplateCode, OrderHeader.NoDueDate, OrderHeader.DeliveryDate, OrderProcess.MWT, Contact.JobTitle, 
                         Customer.MJobTicketNotes, OrderProcess.UserDefined1 AS PUserdefined1, OrderProcess.UserDefined2 AS PUserdefined2, OrderProcess.UserDefined3 AS PUserdefined3, 
                         OrderProcess.UserDefined4 AS PUserdefined4, OrderProcess.UserDefined5 AS PUserdefined5, Material.DefaultLocationCode, Location.Description AS LocationDescription, 
                         Process.Description AS StandardProcessDescription, Process.Comments AS StandardProcessComments, OrderComponent.FlexoNoTeeth, OrderComponent.LabelsPerRoll, CylinderInventory.CylinderCode, 
                         CylinderInventory.Description AS CylinderDescription, CylinderInventory.Distortion, CylinderInventory.CylindersOnHand, CylinderInventory.NumberOfTeeth, OrderProcess.NumberOfHelpers, Process.HelperCode, 
                         OrderComponent.Color1SidedSheets, OrderComponent.Color2SidedSheets, OrderComponent.BlankSheets, OrderInLineOp.DieNumber AS AdditionalDie, OrderComponent.ComboSheets, 
                         OrderComponent.LabelsPerFold, Customer.CustomerOvers, OrderHeader.ProofApprovalTime, Customer.UserDefined1 AS CustomerUserDefined1, Customer.UserDefined2 AS CustomerUserDefined2, 
                         OrderHeader.CreateOpr, OrderProcess.OneSidedSheets AS MaterialOneSidedSheets, OrderProcess.TwoSidedSheets AS MaterialTwoSidedSheets, OrderProcess.Color1SidedSheets AS MaterialColor1SidedSheets,
                          OrderProcess.Color2SidedSheets AS MaterialColor2SidedSheets, OrderProcess.BlankSheets AS MaterialBlankSheets, OrderProcess.ComboSheets AS MaterialComboSheets, OrderComponent.ComponentType, 
                         OrderValue.OutputQuantity AS NetToBindery,
                             (SELECT        COUNT(ItemNumber) AS Expr1
                               FROM            OrderProcess AS OP
                               WHERE        (JobNumber = OrderHeader.JobNumber) AND (ItemNumber >= 1000)) AS JobChangeOrders,
                             (SELECT        CreateDatim
                               FROM            OrderProcess AS OP
                               WHERE        (JobNumber = OrderHeader.JobNumber) AND (ItemNumber >= 1000) AND (ItemNumber =
                                                             (SELECT        MAX(ItemNumber) AS Expr1
                                                               FROM            OrderProcess AS OP2
                                                               WHERE        (JobNumber = OP.JobNumber)))) AS LastJobCODate,
                             (SELECT        COUNT(ItemNumber) AS Expr1
                               FROM            OrderProcess AS OP
                               WHERE        (JobNumber = OrderHeader.JobNumber) AND (ComponentNumber = OrderComponent.ComponentNumber) AND (ItemNumber >= 1000)) AS CompChangeOrders,
                             (SELECT        CreateDatim
                               FROM            OrderProcess AS OP
                               WHERE        (JobNumber = OrderHeader.JobNumber) AND (ComponentNumber = OrderComponent.ComponentNumber) AND (ItemNumber >= 1000) AND (ItemNumber =
                                                             (SELECT        MAX(ItemNumber) AS Expr1
                                                               FROM            OrderProcess AS OP2
                                                               WHERE        (JobNumber = OP.JobNumber) AND (ComponentNumber = OP.ComponentNumber)))) AS LastCompCODate, OrderProcess.CreateDatim AS ProcessCreateDatim, 
                         OrderInLineOp.RunPercentage AS InLineOpRunPercentage, OrderHeader.UserDefined6, OrderHeader.UserDefined7, OrderHeader.Updatedatim, OrderInLineOp.InLineOpNo, OrderComponent.BookThickness, 
                         OrderQtyTable.Overs, OrderHeader.OutsideOrderID, v_PortalOrderSplitJobsCounts.CountofJobs
FROM            OrderValue INNER JOIN
                         OrderQtyTable ON OrderValue.JobNumber = OrderQtyTable.JobNumber AND OrderValue.ComponentNumber = OrderQtyTable.ComponentNumber AND 
                         OrderValue.QuantityLineNo = OrderQtyTable.QuantityLineNo INNER JOIN
                         OrderProcess ON OrderValue.JobNumber = OrderProcess.JobNumber AND OrderValue.ComponentNumber = OrderProcess.ComponentNumber AND OrderValue.GroupNo = OrderProcess.GroupNo AND 
                         OrderValue.ItemNumber = OrderProcess.ItemNumber AND OrderValue.PartNumber = OrderProcess.PartNumber LEFT OUTER JOIN
                         OrderInLineOp ON OrderProcess.JobNumber = OrderInLineOp.JobNumber AND OrderProcess.ComponentNumber = OrderInLineOp.ComponentNumber AND OrderProcess.GroupNo = OrderInLineOp.GroupNo AND 
                         OrderProcess.ItemNumber = OrderInLineOp.ItemNumber AND OrderProcess.PartNumber = 0 INNER JOIN
                         OrderComponent ON OrderValue.JobNumber = OrderComponent.JobNumber AND OrderValue.ComponentNumber = OrderComponent.ComponentNumber AND 
                         OrderValue.QuantityLineNo = OrderComponent.QtyOrdIndex INNER JOIN
                         OrderHeader ON OrderComponent.JobNumber = OrderHeader.JobNumber LEFT OUTER JOIN
                         v_PortalOrderSplitJobsCounts ON OrderHeader.FormNumber = v_PortalOrderSplitJobsCounts.FormNumber LEFT OUTER JOIN
                         OrderComponentText ON OrderComponent.JobNumber = OrderComponentText.JobNumber AND OrderComponent.ComponentNumber = OrderComponentText.ComponentNumber LEFT OUTER JOIN
                         SalesRep ON OrderHeader.SalesRepCode = SalesRep.Code LEFT OUTER JOIN
                         Contact ON OrderHeader.CustAccount = Contact.Account AND OrderHeader.CustContact = Contact.ContactName AND (OrderHeader.CustContactID = Contact.ID OR
                         OrderHeader.CustContactID = 0) LEFT OUTER JOIN
                         Customer ON OrderHeader.CustAccount = Customer.Account LEFT OUTER JOIN
                         CustomFields ON CustomFields.CompanyID = 'PSD' LEFT OUTER JOIN
                         Material ON OrderProcess.MaterialCode = Material.MaterialCode AND OrderProcess.GroupNo = 3 LEFT OUTER JOIN
                         Process ON OrderProcess.ProcessCode = Process.ProcessCode LEFT OUTER JOIN
                         CylinderInventory ON OrderComponent.CylinderCode = CylinderInventory.CylinderCode LEFT OUTER JOIN
                         Location ON Material.DefaultLocationCode = Location.Code
WHERE        (OrderValue.JobNumber = @JobNumber) AND (OrderProcess.DontPrintOnTicket = 0) AND (OrderComponent.ComponentType <> 'FINGOOD')


USE [Enterprise32Sandbox]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/****** Object:  StoredProcedure [dbo].[sp_PackingSlip]    Script Date: 10/19/2023 11:13:56 AM ******/
ALTER PROCEDURE [dbo].[sp_PackingSlip] @JobNumber as varchar (20) AS Set NOCOUNT ON SET Transaction Isolation Level Read Uncommitted SELECT        P.PackageID, P.ShipmentNumber, P.Quantity, P.Weight, P.FreightCost, P.ShipMethod, P.ShipDate, P.ComponentNumber, P.StartNumber, P.EndNumber, P.TrackingNumber, P.NumberOfPackages, P.JobNumber, 
                         S.ShipmentNumber AS Expr1, S.ShipName, S.ShipAddress1, S.ShipAddress2, S.ShipAddress3, S.ShipCountry, S.ShipCity, S.ShipState, S.ShipZip, S.ShipCountry AS Expr2, S.ShipContact, S.ShipPhone, S.ShipFax, 
                         S.ShipInNameOf, S.FOB, S.Instructions, OC.BackOrder AS BackOrderShipment, SR.Description AS SalesRepName, SV.Description AS ShipDescription, OH.PONumber, OH.JobDescription, 
                         OC.Description AS ComponentDescription, C.BillName, C.BillAddress1, C.BillAddress2, C.BillCity, C.BillState, C.BillZip, C.BillPhone, C.BillFax, C.BillContact, C.BillCountry, OQ.Quantity AS OrderQuantity, 
                         OH.CustAccount, OH.CustName, OH.CustAddress1, OH.CustAddress2, OH.CustAddress3, OH.CustCity, OH.CustState, OH.CustZip, OH.CustPhone, OH.CustFax, OH.CustContact, OH.FormNumber, 
                         OH.OriginalJobNumber, OH.ReleaseNumber, P.Description AS PackageDescription, OC.BackOrderQuantity, P.OddPackageQty, S.MShipInstructions, OH.PlantID, P.PostageCost, C.TermsCode, S.Residence, 
                         OH.DeliveryDate, S.Email, OH.CSR, P.TotalQtyShipped, OH.ProofDate, OH.ProofTime, OH.ProofDeliveryDate, P.ShipViaService, SS.Description AS ShipingServiceDescription, OH.DistPO, OC.FinGoodCode, 
                         OH.OrderDate, S.ThirdPartyBilling, S.Shipped, S.SequenceNumber, P.OddPackageWeight, T.Description AS TermsDesc, CP.CompanyName, CP.CompanyAddress1, CP.CompanyAddress2, CP.CompanyAddress3, 
                         CP.CompanyCity, CP.CompanyState, CP.CompanyZip, CP.Website, CP.CompanyEmail, CP.CompanyPhone, CP.CompanyFax, CP.ReportImage, OH.OutsideOrderID, 
                         v_PortalOrderSplitJobsCounts.CountofJobs
FROM            Package AS P INNER JOIN
                         Shipment AS S ON P.ShipmentNumber = S.ShipmentNumber INNER JOIN
                         OrderHeader AS OH ON S.JobNumber = OH.JobNumber INNER JOIN
                         Customer AS C ON OH.CustAccount = C.Account LEFT OUTER JOIN
                         v_PortalOrderSplitJobsCounts ON OH.FormNumber = v_PortalOrderSplitJobsCounts.FormNumber LEFT OUTER JOIN
                         OrderComponent AS OC ON P.JobNumber = OC.JobNumber AND (P.ComponentNumber = OC.ComponentNumber OR
                         P.ComponentNumber = 0 AND OC.ComponentNumber = 1) LEFT OUTER JOIN
                         OrderQtyTable AS OQ ON OC.JobNumber = OQ.JobNumber AND OC.ComponentNumber = OQ.ComponentNumber AND OC.QtyOrdIndex = OQ.QuantityLineNo LEFT OUTER JOIN
                         SalesRep AS SR ON OH.SalesRepCode = SR.Code LEFT OUTER JOIN
                         ShipVia AS SV ON P.ShipMethod = SV.Code LEFT OUTER JOIN
                         ShipViaService AS SS ON P.ShipMethod = SS.ShipViaCode AND P.ShipViaService = SS.Code LEFT OUTER JOIN
                         Terms AS T ON C.TermsCode = T.Code LEFT OUTER JOIN
                         Company AS CP ON CP.CompanyID = (CASE WHEN OH.PlantID <> '' THEN OH.PlantID ELSE 'PSD' END)
WHERE        (S.JobNumber = @JobNumber)


USE [Enterprise32Sandbox]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/****** Object:  StoredProcedure [dbo].[sp_PickingSlip]    Script Date: 10/19/2023 11:15:47 AM ******/
 ALTER PROCEDURE [dbo].[sp_PickingSlip]   @JobNumber VARCHAR(20)  AS  SET NOCOUNT ON;  SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;  SELECT        OrderProcess.EstimateNumber, OrderProcess.JobNumber, OrderProcess.ComponentNumber, OrderProcess.GroupNo, OrderProcess.ItemNumber, OrderProcess.PartNumber, OrderProcess.ProcessCode, 
                         OrderProcess.MaterialCode, OrderProcess.Description AS ProcessDescription, OrderProcess.Repetitions, OrderProcess.UnitsPerCycle, OrderProcess.Caliper, OrderProcess.BWT, OrderProcess.Width, 
                         OrderProcess.Length, OrderProcess.ParentOuts, OrderProcess.ParentSize, OrderProcess.PartialColors, OrderProcess.ColorsSide1, OrderProcess.ColorsSide2, OrderProcess.MarginalWord, 
                         OrderProcess.MarginalColor, OrderProcess.MarginalPosition, OrderProcess.PlateChange, OrderProcess.PlateVersion, OrderProcess.ChangeOrder, OrderProcess.WebSigs, OrderProcess.WebPages, 
                         OrderProcess.Color, OrderProcess.Comments, OrderProcess.SigWidth, OrderProcess.SigLength, OrderProcess.SigSize, OrderComponent.Description AS ComponentDescription, OrderComponent.Sides, 
                         OrderComponent.InksSide1, OrderComponent.InksSide2, OrderComponent.Lots, OrderComponent.PagesPerLot, OrderComponent.RunMethod, OrderComponent.PartsToPrint, OrderComponent.RequireBleed, 
                         OrderComponent.DieNumber, OrderComponent.DieTeeth, OrderComponent.NoAcross, OrderComponent.NoAround, OrderComponent.FinalDepth, OrderComponent.ConsStartNo, OrderComponent.Encoding, 
                         OrderComponent.MissNumbNone, OrderComponent.MissNumbList, OrderComponent.FinalSize, OrderComponent.PressSize, OrderComponent.DetailDescription, OrderComponent.FinalWidth, 
                         OrderComponent.FinalLength, OrderComponent.PressWidth, OrderComponent.PressLength, OrderComponent.PressOuts, OrderComponent.FinishWidth, OrderComponent.FinishLength, 
                         OrderComponent.FinishSize, OrderComponent.ParentWidth, OrderComponent.ParentLength, OrderComponent.KitOrder, OrderComponent.FinGoodCode, OrderHeader.CustAccount, OrderHeader.CustName, 
                         OrderHeader.CustAddress1, OrderHeader.CustAddress2, OrderHeader.CustCity, OrderHeader.CustState, OrderHeader.CustZip, OrderHeader.CustPhone, OrderHeader.CustFax, OrderHeader.CustContact, 
                         OrderHeader.SalesRepCode, OrderHeader.CustCountry, OrderHeader.CustEmail, OrderHeader.EndUserName, OrderHeader.EndUserAccount, OrderHeader.CSR, OrderHeader.Estimator, 
                         OrderHeader.JobDescription, OrderHeader.PONumber, OrderHeader.PrevPONumber, OrderHeader.OriginalJobNumber, OrderHeader.DistPO, OrderHeader.PrevDistPO, OrderHeader.DueTime, 
                         OrderHeader.DueDate, OrderHeader.DueTimeText, OrderHeader.OrderDate, OrderHeader.ReleaseNumber, OrderHeader.OrderType, OrderHeader.ProofDate, OrderHeader.ProofTime, OrderHeader.ProofTimeText, 
                         OrderHeader.ProofComments, OrderHeader.Revision, OrderHeader.RevisionDate, OrderHeader.RevisionReason, OrderHeader.UserDefined1, OrderHeader.UserDefined2, OrderHeader.UserDefined3, 
                         OrderHeader.UserDefined4, OrderHeader.UserDefined5, OrderHeader.CustUserDefined1, OrderHeader.CustUserDefined2, OrderHeader.CustUserDefined3, OrderHeader.JobDetailDescription, OrderHeader.Notes, 
                         OrderHeader.FormNumber, OrderQtyTable.Quantity, OrderQtyTable.QuantityLineNo, OrderQtyTable.TotalPrice, OrderValue.ProductionQuantity, OrderValue.MaterialQuantity, OrderValue.ProductionMinutes, 
                         OrderHeader.PrevJobNumber, OrderComponent.PressInstructions, OrderComponent.PPInstructions, OrderComponent.ASInstructions, OrderComponent.StockInstructions, OrderComponent.PostInstructions, 
                         OrderComponent.InkInstructions, OrderComponent.LotNumber, MaterialOnHand.LocationCode, OrderHeader.PlantID, MOH.LocationCode AS SelectedLocationCode, OrderHeader.PickSlipPrinted, 
                         MaterialOnHand.Quantity AS QuantityOnHand, MaterialOnHand.EntryDate AS OnHandDate, MaterialOnHand.Code AS OnHandCode, Material.CartonQty, Material.UnitDescription, OrderHeader.OutsideOrderID, 
                         v_PortalOrderSplitJobsCounts.CountofJobs
FROM            OrderValue INNER JOIN
                         OrderQtyTable ON OrderValue.JobNumber = OrderQtyTable.JobNumber AND OrderValue.ComponentNumber = OrderQtyTable.ComponentNumber AND 
                         OrderValue.QuantityLineNo = OrderQtyTable.QuantityLineNo INNER JOIN
                         OrderProcess ON OrderValue.JobNumber = OrderProcess.JobNumber AND OrderValue.ComponentNumber = OrderProcess.ComponentNumber AND OrderValue.GroupNo = OrderProcess.GroupNo AND 
                         OrderValue.ItemNumber = OrderProcess.ItemNumber AND OrderValue.PartNumber = OrderProcess.PartNumber INNER JOIN
                         OrderComponent ON OrderValue.JobNumber = OrderComponent.JobNumber AND OrderValue.ComponentNumber = OrderComponent.ComponentNumber AND 
                         OrderValue.QuantityLineNo = OrderComponent.QtyOrdIndex INNER JOIN
                         OrderHeader ON OrderComponent.JobNumber = OrderHeader.JobNumber INNER JOIN
                         Material ON OrderProcess.MaterialCode = Material.MaterialCode LEFT OUTER JOIN
                         v_PortalOrderSplitJobsCounts ON OrderHeader.FormNumber = v_PortalOrderSplitJobsCounts.FormNumber LEFT OUTER JOIN
                         MaterialOnHand ON OrderProcess.MaterialCode = MaterialOnHand.MaterialCode LEFT OUTER JOIN
                         MaterialOnHand AS MOH ON OrderComponent.FinGoodCode = MOH.MaterialCode AND OrderComponent.LotNumber = MOH.LotNumber AND OrderComponent.LotNumber > '' AND 
                         OrderComponent.KitOrder = 0
WHERE        (OrderValue.JobNumber = @JobNumber) AND (OrderProcess.DontPrintOnTicket = 0) AND (OrderComponent.ComponentType = 'FINGOOD')


USE [Enterprise32Sandbox]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/****** Object:  StoredProcedure [dbo].[sp_PurchaseOrder]    Script Date: 10/19/2023 11:19:24 AM ******/
ALTER PROCEDURE [dbo].[sp_PurchaseOrder] @PONumber varchar(50) As Set NOCOUNT On Set Transaction Isolation Level Read Uncommitted  Declare @ExchangeRate as real   SET @ExchangeRate = IsNull((Select Case When PO.ExchangeRate = 0 Then 1 Else PO.ExchangeRate End From POHeader PO WHERE PO.PONumber = @PONumber),1) SELECT        POLineItem.ItemNumber, POLineItem.Quantity, POLineItem.UnitCost * @ExchangeRate AS UnitCost, POLineItem.ExtendedCost * @ExchangeRate AS ExtendedCost, POLineItem.ProductID, 
                         POLineItem.JobNumber, POLineItem.Description, POLineItem.Color, POLineItem.BWT, POLineItem.Width, POLineItem.Length, POLineItem.MWT, POLineItem.CostingMethod, POLineItem.LineItemType, 
                         POLineItem.MComments AS MLineComments, POLineItem.DueDate, POLineItem.UnitDescription, POHeader.PONumber, POHeader.VendorID, POHeader.IssueDate, POHeader.MComments, 
                         POHeader.VendorContact, PODropShip.ShipName, PODropShip.ShipAddress1, PODropShip.ShipAddress2, PODropShip.ShipCity, PODropShip.ShipState, PODropShip.ShipZip, PODropShip.ShipContact, 
                         PODropShip.ShipPhone, PODropShip.ShipFax, ShipVia.Description AS ShipViaDescription, Company.CompanyName, Company.CompanyAddress1, Company.CompanyAddress2, Company.CompanyCity, 
                         Company.CompanyState, Company.CompanyPhone, Company.CompanyFax, Company.CompanyZip, Vendor.VendorName, Vendor.VendorAddress1, Vendor.VendorAddress2, Vendor.VendorCity, 
                         Vendor.VendorState, Vendor.VendorZip, Vendor.VendorPhone, Vendor.VendorFax, Vendor.VendorContact AS DefaultVendorContact, POLineItem.DueDate AS Expr1, POHeader.UserName, POLineItem.MaterialCode, 
                         POHeader.PlantID, POHeader.POAgent, POLineItem.GLAccount, POLineItem.SlitRolls1, POLineItem.SlitRolls2, POLineItem.SlitRolls3, POLineItem.SlitRolls4, POLineItem.SlitRolls5, POLineItem.SlitRolls6, 
                         POLineItem.SlitRollWidth1, POLineItem.SlitRollWidth2, POLineItem.SlitRollWidth3, POLineItem.SlitRollWidth4, POLineItem.SlitRollWidth5, POLineItem.SlitRollWidth6, Terms.Description AS TermsDescription, 
                         Vendor.CompanyAccount, POLineItem.Height, VendorContact.Phone, VendorContact.Fax, VendorContact.CellPhone, VendorContact.Email, POLineItem.NoDueDate, VendorContact.MNotes, 
                         POLineItem.FixedQuantity, POLineItem.FixedUnitCost * @ExchangeRate AS FixedUnitCost, SVS.Description AS ShipViaService, Company.ReportImage, Material.Comments AS MaterialComments, 
                         POHeader.CustAccount, Customer.CustName, Customer.Address1 AS CustAddress1, Customer.Address2 AS CustAddress2, Customer.Address3 AS CustAddress3, Customer.City AS CustCity, 
                         Customer.State AS CustState, Customer.Zip AS CustZip, Customer.Phone AS CustPhone, Customer.Fax AS CustFax, Customer.ContactName AS DefaultCustomerContact, POLineItem.SupplierEstimateNumber, 
                         POLineItem.UserDefined1, POLineItem.UserDefined2
FROM            POLineItem INNER JOIN
                         POHeader ON POLineItem.PONumber = POHeader.PONumber LEFT OUTER JOIN
                         Customer ON POHeader.CustAccount = Customer.Account LEFT OUTER JOIN
                         PODropShip ON POHeader.PONumber = PODropShip.PONumber LEFT OUTER JOIN
                         ShipVia ON POHeader.ShipViaCode = ShipVia.Code LEFT OUTER JOIN
                         Vendor ON POHeader.VendorID = Vendor.VendorID LEFT OUTER JOIN
                         VendorContact ON POHeader.VendorID = VendorContact.VendorID AND POHeader.VendorContact = VendorContact.ContactName LEFT OUTER JOIN
                         Company ON Company.CompanyID = (CASE WHEN POHeader.PlantID <> '' THEN POHeader.PlantID ELSE 'PSD' END) LEFT OUTER JOIN
                         UserLogIn ON POHeader.UserName = UserLogIn.LogInName LEFT OUTER JOIN
                         Terms ON Vendor.DefaultTermsCode = Terms.Code LEFT OUTER JOIN
                         ShipViaService AS SVS ON POHeader.ShipViaService = SVS.Code AND POHeader.ShipViaCode = SVS.ShipViaCode LEFT OUTER JOIN
                         Material ON POLineItem.MaterialCode = Material.MaterialCode
WHERE        (POHeader.PONumber = @PONumber)
ORDER BY POHeader.PONumber, POLineItem.ItemNumber


USE [Enterprise32Sandbox]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/****** Object:  StoredProcedure [dbo].[sp_SummaryTicket2]    Script Date: 10/19/2023 11:32:33 AM ******/
 ALTER PROCEDURE [dbo].[sp_SummaryTicket2]   @JobNumber VARCHAR(20)  AS  SET NOCOUNT ON;  SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;  SELECT        OrderProcess.EstimateNumber, OrderProcess.JobNumber, OrderProcess.ComponentNumber, OrderProcess.GroupNo, OrderProcess.ItemNumber, OrderProcess.PartNumber, OrderProcess.ProcessCode, 
                         OrderProcess.MaterialCode, OrderProcess.Description, OrderProcess.Repetitions, OrderProcess.UnitsPerCycle, OrderProcess.Caliper, OrderProcess.BWT, OrderProcess.Width, OrderProcess.Length, 
                         OrderProcess.ParentOuts, OrderProcess.ParentSize, OrderProcess.PartialColors, OrderProcess.ColorsSide1, OrderProcess.ColorsSide2, OrderProcess.MarginalWord, OrderProcess.MarginalColor, 
                         OrderProcess.MarginalPosition, OrderProcess.PlateChange, OrderProcess.PlateVersion, OrderProcess.ChangeOrder, OrderProcess.WebSigs, OrderProcess.WebPages, OrderProcess.Sides AS wSides, 
                         OrderProcess.Color, OrderProcess.MComments, OrderProcess.SigWidth, OrderProcess.SigLength, OrderProcess.SigSize, OrderComponent.Description AS ComponentDescription, OrderComponent.Sides, 
                         OrderComponent.InksSide1, OrderComponent.InksSide2, OrderComponent.Lots, OrderComponent.PagesPerLot, OrderComponent.FinalWidth, OrderComponent.FinalLength, OrderComponent.PressWidth, 
                         OrderComponent.PressLength, OrderComponent.PressOuts, OrderComponent.RunMethod, OrderComponent.PartsToPrint, OrderComponent.RequireBleed, OrderComponent.DieNumber, OrderComponent.DieTeeth, 
                         OrderComponent.NoAcross, OrderComponent.NoAround, OrderComponent.FinalDepth, OrderComponent.ConsStartNo, OrderComponent.Encoding, OrderComponent.MissNumbNone, 
                         OrderComponent.MissNumbList, OrderComponent.FinalSize, OrderComponent.PressSize, OrderComponent.FinishWidth, OrderComponent.FinishLength, OrderComponent.FinishSize, 
                         OrderComponent.ParentWidth AS CParentWidth, OrderComponent.ParentLength AS CParentLength, OrderComponent.ParentOuts AS CParentOuts, OrderComponent.ParentSize AS CParentSize, 
                         OrderHeader.CustAccount, OrderHeader.CustName, OrderHeader.CustAddress1, OrderHeader.CustAddress2, OrderHeader.CustCity, OrderHeader.CustState, OrderHeader.CustZip, OrderHeader.CustPhone, 
                         OrderHeader.CustFax, OrderHeader.CustContact, OrderHeader.SalesRepCode, OrderHeader.CustCountry, OrderHeader.CustEmail, OrderHeader.EndUserName, OrderHeader.EndUserAccount, OrderHeader.CSR, 
                         OrderHeader.Estimator, OrderHeader.JobDescription, OrderHeader.PONumber, OrderHeader.PrevPONumber, OrderHeader.OriginalJobNumber, OrderHeader.DistPO, OrderHeader.PrevDistPO, 
                         OrderHeader.DueTime, OrderHeader.DueDate, OrderHeader.DueTimeText, OrderHeader.OrderDate, OrderHeader.ReleaseNumber, OrderHeader.OrderType, OrderHeader.ProofDate, OrderHeader.ProofTime, 
                         OrderHeader.ProofTimeText, OrderHeader.ProofComments, OrderHeader.Revision, OrderHeader.RevisionDate, OrderHeader.RevisionReason, OrderHeader.UserDefined1, OrderHeader.UserDefined2, 
                         OrderHeader.UserDefined3, OrderHeader.UserDefined4, OrderHeader.UserDefined5, OrderHeader.CustUserDefined1, OrderHeader.CustUserDefined2, OrderHeader.CustUserDefined3, 
                         OrderHeader.MJobDetailDescription, OrderHeader.Notes, OrderHeader.FormNumber, OrderHeader.TotalComponents, OrderQtyTable.Quantity, OrderQtyTable.QuantityLineNo, OrderQtyTable.TotalPrice, 
                         OrderValue.ProductionQuantity, OrderValue.MaterialQuantity, OrderValue.ProductionMinutes, OrderHeader.PrevJobNumber, OrderComponentText.PressInstructions, OrderComponentText.PPInstructions, 
                         OrderComponentText.ASInstructions, OrderComponentText.StockInstructions, OrderComponentText.PostInstructions, OrderComponentText.InkInstructions, OrderComponentText.DetailDescription, 
                         SalesRep.Description AS SalesRepName, OrderComponent.GrainCritical, OrderProcess.SheetSpoilage, Contact.Phone AS ContactPhone, Contact.Fax AS ContactFax, OrderHeader.NoProofRequired, 
                         OrderProcess.DueDate AS ProcessDueDate, OrderProcess.DueTime AS ProcessDueTime, OrderComponent.DueDate AS ComponentDueDate, OrderComponent.DueTime AS ComponentDueTime, 
                         OrderProcess.VendorID AS OrderVendorId, OrderComponent.FlexoDieCharge, OrderValue.ProductionPrice + OrderValue.MaterialPrice AS ProcessSellPrice, OrderProcess.DieNumber AS PDieNumber, 
                         OrderQtyTable.ManualPrice, OrderProcess.FormPartNumber, OrderInLineOp.InLineDesc, OrderInLineOp.InLineQty, OrderHeader.PlantID, OrderComponent.UserDefined1 AS CUserDefined1, 
                         OrderComponent.UserDefined2 AS CUserDefined2, OrderComponent.UserDefined3 AS CUserDefined3, OrderComponent.UserDefined4 AS CUserDefined4, OrderComponent.UserDefined5 AS CUserDefined5, 
                         Contact.CellPhone AS ContactCellPhone, Contact.HomePhone AS ContactHomePhone, Contact.Email AS ContactEmail, CustomFields.QuoteText1, CustomFields.QuoteText2, CustomFields.QuoteText3, 
                         CustomFields.QuoteText4, OrderComponent.TemplateCode, OrderHeader.NoDueDate, OrderHeader.DeliveryDate, OrderProcess.MWT, OrderProcess.QtyOverride, OrderHeader.MNotes, 
                         OrderHeader.UserDefined6, OrderHeader.UserDefined7, OrderHeader.OutsideOrderID, v_PortalOrderSplitJobsCounts.CountofJobs
FROM            OrderValue INNER JOIN
                         OrderQtyTable ON OrderValue.JobNumber = OrderQtyTable.JobNumber AND OrderValue.ComponentNumber = OrderQtyTable.ComponentNumber AND 
                         OrderValue.QuantityLineNo = OrderQtyTable.QuantityLineNo INNER JOIN
                         OrderProcess ON OrderValue.JobNumber = OrderProcess.JobNumber AND OrderValue.ComponentNumber = OrderProcess.ComponentNumber AND OrderValue.GroupNo = OrderProcess.GroupNo AND 
                         OrderValue.ItemNumber = OrderProcess.ItemNumber AND OrderValue.PartNumber = OrderProcess.PartNumber LEFT OUTER JOIN
                         OrderInLineOp ON OrderProcess.JobNumber = OrderInLineOp.JobNumber AND OrderProcess.ComponentNumber = OrderInLineOp.ComponentNumber AND OrderProcess.GroupNo = OrderInLineOp.GroupNo AND 
                         OrderProcess.ItemNumber = OrderInLineOp.ItemNumber AND OrderProcess.PartNumber = 0 INNER JOIN
                         OrderComponent ON OrderValue.JobNumber = OrderComponent.JobNumber AND OrderValue.ComponentNumber = OrderComponent.ComponentNumber AND 
                         OrderValue.QuantityLineNo = OrderComponent.QtyOrdIndex INNER JOIN
                         OrderHeader ON OrderComponent.JobNumber = OrderHeader.JobNumber LEFT OUTER JOIN
                         v_PortalOrderSplitJobsCounts ON OrderHeader.FormNumber = v_PortalOrderSplitJobsCounts.FormNumber LEFT OUTER JOIN
                         OrderComponentText ON OrderComponent.JobNumber = OrderComponentText.JobNumber AND OrderComponent.ComponentNumber = OrderComponentText.ComponentNumber LEFT OUTER JOIN
                         SalesRep ON OrderHeader.SalesRepCode = SalesRep.Code LEFT OUTER JOIN
                         Contact ON OrderHeader.CustAccount = Contact.Account AND OrderHeader.CustContactID = Contact.ID LEFT OUTER JOIN
                         CustomFields ON CustomFields.CompanyID = 'PSD'
WHERE        (OrderValue.JobNumber = @JobNumber) AND (OrderProcess.DontPrintOnTicket = 0) AND (OrderComponent.ComponentType <> 'FINGOOD')
