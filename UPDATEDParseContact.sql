USE Enterprise32
GO
DROP TABLE #TEMP
GO
SELECT 
RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))) as test,
CASE
     WHEN (ContactName='') or (CHARINDEX('http:', ContactName)>0) or (CHARINDEX('@', ContactName)>0) or (CHARINDEX('.', ContactName)=4) THEN ''
     ELSE
          CASE 
               WHEN parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 4) IS NOT NULL THEN dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 4)) 
               ELSE CASE 
                         WHEN parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 3) IS NOT NULL THEN dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 3)) 
                         ELSE CASE 
                                   WHEN parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 2) IS NOT NULL THEN dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 2))
                                   ELSE dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 1))
                              END
                    END
          END
END AS xFirstName, 
CASE
     WHEN (ContactName='') or (CHARINDEX('http:', ContactName)>0) or (CHARINDEX('@', ContactName)>0) or (CHARINDEX('.', ContactName)=4) THEN ''
     ELSE
          CASE 
               WHEN parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 3) IS NOT NULL THEN dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 2)) 
               ELSE '' 
          END
END AS xMiddleName, 
CASE
     WHEN (ContactName='') or (CHARINDEX('http:', ContactName)>0) or (CHARINDEX('@', ContactName)>0) or (CHARINDEX('.', ContactName)=4) THEN ''
     ELSE
          CASE 
               WHEN parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 2) IS NOT NULL THEN dbo.NormalizeCase(parsename(replace(RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(dbo.fn_SplitString(REPLACE(REPLACE(REPLACE(ContactName,'AP - ',''),'AP/ ',''),'AP / ',''),'(',1),'/',1),', ',1), ' - ',1), 'Ms. ', ''), 'Dr. ', ''), '  ', ' '),'.',''))), ' ', '.'), 1))
               ELSE ''
          END
END AS xLastName,
ID 
INTO #TEMP
FROM Enterprise32.dbo.Contact where (FirstName = '' and LastName = '' and IsInactive = 0)
GO
select xFirstName, xLastName, ID from #TEMP
GO
UPDATE t1
SET t1.FirstName = t2.xFirstName, t1.LastName = t2.xLastName
FROM Enterprise32.dbo.Contact t1
INNER JOIN #TEMP t2
ON t1.ID = t2.ID
GO