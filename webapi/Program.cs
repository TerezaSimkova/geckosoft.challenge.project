using Microsoft.EntityFrameworkCore;
using webapi.Server.Core.BusinessLayers.GifLayer;
using webapi.Server.Core.BusinessLayers.UserLayer;
using webapi.Server.Core.Interfaces;
using webapi.Server.Core.Repository;
using webapi.Server.Database;
using webapi.Settings;

var builder = WebApplication.CreateBuilder(args);

// Data source
var dbConfiguration = builder.Configuration.GetSection("DbConfiguration").Get<AppSettings>();
var database = dbConfiguration == null ? string.Empty : dbConfiguration.Database;
var dbLocation = dbConfiguration == null ? string.Empty : dbConfiguration.DbLocation;
var dbName = dbConfiguration == null ? string.Empty : dbConfiguration.DbString;

builder.Services.AddDbContext<GeckosoftAppContext>(option =>
option.UseSqlServer($"Data Source=({database})\\{dbLocation};Database={dbName};Trusted_Connection=True;"));

// Add services to the container.
builder.Services.AddScoped<IGifLayer, GifBusinessLayer>();
builder.Services.AddScoped<IUserLayer, UserBusinessLayer>();

builder.Services.AddScoped<IGifRepository,GifRepository>();
builder.Services.AddScoped<IUserRepository,UserRepository>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
