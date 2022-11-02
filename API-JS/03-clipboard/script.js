// navigator.clipboard.readText().then(
//     (clipText) => document.querySelector(".cliptext").innerText = clipText);
  

const source = document.querySelector(".source");
const target = document.querySelector(".target");

source.addEventListener('mouseup', selectionHandler);


function selectionHandler( event )
{
    const selection     = window.getSelection();
    const range         = document.createRange();

    // Selection boundary
    const start         = selection.baseOffset;
    const end           = selection.extentOffset;
    const count         = Math.abs(end - start);

    // Data
    const fullText      = selection.anchorNode.data;
    const selectedText  = fullText.substring(start, end);


    // Unselect all
    // selection.removeAllRanges();

    // -- or --

    // Select all
    // selection.removeAllRanges();
    // selection.addRange(range);
    
    if (count > 0) 
    {
        // console.log(selection);
        console.log(count);
        console.log(selectedText);

        navigator.clipboard.writeText( selectedText ).then(() => {
            navigator.clipboard.readText().then( clipText => target.innerText = clipText);
        });
    }
}