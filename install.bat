@echo off
echo Installing packages...
call npm install
echo Finished installing packages.
echo Building files...
call npm run postinstall
cd dist
echo Output built files to %cd%
cd ..
echo Finished building..
echo Press any key to exit...
pause >nul