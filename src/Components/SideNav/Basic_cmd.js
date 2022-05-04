import React from 'react'

const Basic_cmd = () => {
  return (
    <div>
    {/* <p>The echo command displays defined text in the terminal — it’s that simple:
    <img style ={{"width":"100vw"}} src='https://www.facebook.com/Free4arab/photos/a.165114726903551/3273837816031211/'/>
    <br></br>
    Its primary usage is to print environmental variables inside those messages:
    </p> */}
    <pre id='pre' style={{"font-size": "30px", "padding":"40px"}}>
        <h1>Basic Commands</h1>
    ls – directory listing <br></br>
ls -al – formatted listing with hidden files<br></br>
cd dir - change directory to dir<br></br>
cd – change to home<br></br>
pwd – show current directory<br></br>
mkdir dir – create a directory dir<br></br>
rm file – delete file<br></br>
rm -r dir – delete directory dir<br></br>
rm -f file – force remove file<br></br>
rm -rf dir – force remove directory dir *<br></br>
cp file1 file2 – copy file1 to file2<br></br>
cp -r dir1 dir2 – copy dir1 to dir2; create dir2 if it<br></br>
doesn't exist<br></br>
mv file1 file2 – rename or move file1 to file2<br></br>
if file2 is an existing directory, moves file1 into<br></br>
directory file2<br></br>
ln -s file link – create symbolic link link to file<br></br>
touch file – create or update file<br></br>
cat  file – places standard input into file<br></br>
more file – output the contents of file<br></br>
head file – output the first 10 lines of file<br></br>
tail file – output the last 10 lines of file<br></br>
tail -f file – output the contents of file as it<br></br>
grows, starting with the last 10 lines<br></br>
    </pre>
    
  </div>
  )
}

export default Basic_cmd