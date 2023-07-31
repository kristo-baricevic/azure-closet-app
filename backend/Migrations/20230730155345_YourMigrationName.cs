using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace closet.Migrations
{
    /// <inheritdoc />
    public partial class YourMigrationName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserClothingItems_Users_UserId",
                table: "UserClothingItems");

            migrationBuilder.DropIndex(
                name: "IX_UserClothingItems_UserId",
                table: "UserClothingItems");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "UserClothingItems",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<bool>(
                name: "isUserImage",
                table: "UserClothingItems",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isUserImage",
                table: "UserClothingItems");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "UserClothingItems",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_UserClothingItems_UserId",
                table: "UserClothingItems",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserClothingItems_Users_UserId",
                table: "UserClothingItems",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
