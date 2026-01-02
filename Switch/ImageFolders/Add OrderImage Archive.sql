BEGIN TRANSACTION;

DECLARE @FileType varchar(50) = 'Job Archive Folder';
DECLARE @Year varchar(10) = '[Switch.Date:Format="yyyy",TimeZone="System"]';
DECLARE @OrderNumber varchar(20) = '[Job.PrivateData:Key="job_number"]';
DECLARE @AccountNumber varchar(50)  = '[Job.PrivateData:Key="customer_account"]';
DECLARE @Folder varchar(256) =
    LLEFT('\\sf-file18\CurrentYear\JOB FOLDERS\' + @Year + ' Completed\' + @AccountNumber + '\' + @OrderNumber, 256);;

-- Remove estimate images (scoped to this)
DELETE FROM dbo.EstimateImage
WHERE JobNumber = @OrderNumber;

-- Remove known folder rows for this
DELETE FROM dbo.OrderImage
WHERE JobNumber = @OrderNumber
    AND FileType IN ('Estimate Folder', 'Job Folder', 'Job Archive Folder');

-- Cleanup by path
DELETE FROM dbo.OrderImage
WHERE JobNumber = @OrderNumber
    AND FileName NOT LIKE '%' + @OrderNumber + '%';

-- Insert record
INSERT INTO dbo.OrderImage
    (JobNumber, ComponentNumber, FileName, FileType, FileSize, ImageTypeCode, Createdatim)
VALUES
    (@OrderNumber, 1, @Folder, @FileType, 0, '050', GETDATE());

COMMIT TRANSACTION;
