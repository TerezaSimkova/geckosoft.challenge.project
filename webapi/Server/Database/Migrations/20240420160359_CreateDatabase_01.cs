using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Server.Database.Migrations
{
    /// <inheritdoc />
    public partial class CreateDatabase_01 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Gif",
                columns: table => new
                {
                    GifUniqueId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GifUrl = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gif", x => x.GifUniqueId);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "UserGif",
                columns: table => new
                {
                    GifsId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UsersId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserGif", x => new { x.GifsId, x.UsersId });
                    table.ForeignKey(
                        name: "FK_UserGif_Gif_GifsId",
                        column: x => x.GifsId,
                        principalTable: "Gif",
                        principalColumn: "GifUniqueId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserGif_User_UsersId",
                        column: x => x.UsersId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserGif_UsersId",
                table: "UserGif",
                column: "UsersId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserGif");

            migrationBuilder.DropTable(
                name: "Gif");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
