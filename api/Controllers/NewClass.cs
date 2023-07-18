using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers;

public class NewClass
{
    private void CheckTime()
    {
        var hour = Week.tue;
    }
}

enum Week {
    saturday,
    sun,
    mon,
    tue,
    wen,
    thur
}