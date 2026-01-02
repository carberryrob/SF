BEGIN TRANSACTION;

DECLARE @FileType varchar(50) = 'Job Folder';
DECLARE @OrderNumber varchar(20) = '[Job.PrivateData:Key="job_number"]';
DECLARE @AccountNumber varchar(50)  = '[Job.PrivateData:Key="customer_account"]';
DECLARE @Folder varchar(256) =
    LEFT('\\sf-file18\CurrentYear\JOB FOLDERS\Active\' + @AccountNumber + '\' + @OrderNumber, 256);

-- Remove estimate images (scoped to this)
DELETE FROM dbo.EstimateImage
WHERE JobNumber = @OrderNumber;

-- Remove known folder rows for this
DELETE FROM dbo.OrderImage
WHERE JobNumber = @OrderNumber
    AND FileType IN ('Estimate Folder', 'Job Folder');

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
