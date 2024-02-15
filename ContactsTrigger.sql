USE [Enterprise32Sandbox]
GO
/****** Object:  Trigger [dbo].[trg_ContactInsertData]    Script Date: 2/14/2024 2:17:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER TRIGGER [dbo].[trg_ContactInsertData]
ON [dbo].[Contact]
AFTER INSERT
AS

BEGIN
     -- Insert only if FirstName is not null
     IF EXISTS (
          SELECT 1
          FROM Inserted
          WHERE (Inserted.FirstName IS NULL or Inserted.FirstName = '') and (Inserted.LastName IS NULL or Inserted.LastName = '')
     )

     BEGIN
          DECLARE @insertId INT;
          -- Insert into the second table
          INSERT INTO [dbo].[ContactTriggerLog]
          (
               -- Columns to insert, map them accordingly
               ContactName,
               FirstName,
               LastName,
               cID
          )
          SELECT
               -- Columns to select from inserted rows
               Inserted.ContactName,
               CASE
                    WHEN (Inserted.ContactName='') or (CHARINDEX('http:', Inserted.ContactName)>0) or (CHARINDEX('@', Inserted.ContactName)>0) or (CHARINDEX('.', Inserted.ContactName)=4) THEN ''
                    ELSE
                         CASE 
                              WHEN parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(Inserted.ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 4) IS NOT NULL THEN dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(Inserted.ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 4)) 
                              ELSE CASE 
                                        WHEN parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(Inserted.ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 3) IS NOT NULL THEN dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(Inserted.ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 3)) 
                                        ELSE CASE 
                                                  WHEN parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(Inserted.ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 2) IS NOT NULL THEN dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(Inserted.ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 2))
                                                  ELSE dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(Inserted.ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 1))
                                             END
                                   END
                         END
               END AS FirstName, 
               CASE
                    WHEN (ContactName='') or (CHARINDEX('http:', ContactName)>0) or (CHARINDEX('@', ContactName)>0) or (CHARINDEX('.', ContactName)=4) THEN ''
                    ELSE
                         CASE 
                              WHEN parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 2) IS NOT NULL THEN dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 1))
                              ELSE ''
                         END
               END AS LastName,
               Inserted.ID
          FROM Inserted;
          -- Get the ID of the inserted row in the first table
          SET @insertId = @@IDENTITY;
          --SET @insertId = Inserted.ID;

          -- Update the first table with the date from the second table
          UPDATE dbo.Contact
          SET Firstname = (
          SELECT TOP 1 FirstName
          FROM ContactTriggerLog
          WHERE cID = @insertId
          ),
          LastName = (
          SELECT TOP 1 LastName
          FROM ContactTriggerLog
          WHERE cID = @insertId
          )
          WHERE ID = @insertId;
     END;
END;
