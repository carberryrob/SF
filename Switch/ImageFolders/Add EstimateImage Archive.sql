BEGIN TRANSACTION;

DECLARE @FileType varchar(50) = 'Estimate Archive Folder';
DECLARE @Year varchar(10) = '[Switch.Date:Format="yyyy",TimeZone="System"]';
DECLARE @Month varchar(10) = '[Switch.Date:Format="MM",TimeZone="System"]';
DECLARE @OrderNumber varchar(20) = '[Job.PrivateData:Key="quote_number"]';
DECLARE @Folder varchar(256) = LEFT(
    '\\sf-file18\CurrentYear\QIP_ARCHIVE\' + @Year + '\' + @Month + '\' + @OrderNumber, 256);

-- Remove estimate images (scoped to this job)
DELETE FROM dbo.EstimateImage
WHERE EstimateNumber = @OrderNumber;

DELETE FROM dbo.EstimateImage
WHERE EstimateNumber = @OrderNumber
    AND FileName NOT LIKE ' % ' + @OrderNumber + ' % ';

-- Insert record
INSERT INTO dbo.EstimateImage
    (EstimateNumber, ComponentNumber, FileName, FileType, FileSize, ImageTypeCode, Createdatim)
VALUES
    (@OrderNumber, 1, @Folder, @FileType, 0, '050', GETDATE());

COMMIT TRANSACTION;
