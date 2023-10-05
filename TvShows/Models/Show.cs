using System;
using System.Collections.Generic;

namespace TvShows.Models;

public partial class Show
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Genre { get; set; }

    public int? Rating { get; set; }
}
