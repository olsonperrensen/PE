$configFiles = gci BackgroundMask.d.ts, IBackgroundMask.d.ts, CanvasUtils.d.ts -Recurse
foreach ($file in $configFiles)
{
    (Get-Content $file.PSPath) |
    Foreach-Object { $_ -replace "GlobalCompositeOperation", "any" } |
    Set-Content $file.PSPath
}