﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TvShows.Models;

public partial class TvShowDbContext : DbContext
{
    public TvShowDbContext()
    {
    }

    public TvShowDbContext(DbContextOptions<TvShowDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Show> Shows { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=TvShowDB; Integrated Security=SSPI;Encrypt=false;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Show>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__shows__3214EC076F8D8893");

            entity.ToTable("shows");

            entity.Property(e => e.Genre).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
