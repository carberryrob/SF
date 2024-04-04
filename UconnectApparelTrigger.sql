USE [Enterprise32]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Rob Carberry
-- Create date: 4/4/2024
-- Description:	Set DueDate (1/1/1900) and NoDueDate (1) for all orders.
-- =============================================
CREATE TRIGGER [dbo].[UconnectApparelTrigger] 
ON [dbo].[OrderHeader] 
After Insert, Update
Not For Replication
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	if @@ROWCOUNT <> 1
		return
	SET NOCOUNT ON;
    -- Insert statements for trigger here
	-- holds the CustomerID so we know which Customer was updated
	if exists(select * from inserted where CustAccount = '113399')	
	BEGIN
		Declare @JobNumber varchar(50);
		select @JobNumber = JobNumber from inserted;
		update Orderheader 
		set DueDate = '1900-01-01 00:00:00:000', NoDueDate = 1
		where JobNumber = @JobNumber;
	END
END

GO


