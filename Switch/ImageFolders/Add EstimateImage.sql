BEGIN TRANSACTION;

DECLARE @FileType varchar(50) = 'Estimate Folder';
DECLARE @OrderNumber varchar(20) = '[Job.PrivateData:Key="quote_number"]';
DECLARE @Folder varchar(256) = LEFT(
    '\\sf-file18\CurrentYear\QIP\' + @OrderNumber, 256);

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
