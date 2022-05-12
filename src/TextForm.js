import React,{useState} from 'react'

export default function TextForm(props) {
    
    const[text,setText]=useState("");
    const[l,setL]=useState(true);
    const upclick=()=>{
        setText(text.toUpperCase());
        if(text.length!==0)
    props.show("Convert to Upper Case","success");
    }
    const upclick1=(event)=>{
        setText(event.target.value);
        console.log(text.length);
        if(event.target.value.length>0)
         setL(false);
        else
         setL(true); 
        
    }
    const trans=()=>{
        var a=text;
        var c="";
        for(var i=0;i<a.length;i++){
            c=c+""+a.charAt(a.length-i-1);
        }
        setText(c);
        if(text.length!==0)
        props.show("Reverse Message Successfully ","success");
    }
   
    const handlecopy=()=>{
        var text1=document.getElementById("j");
        text1.select();
        if(text.length!==0)
        props.show("Cop to Clipboard ","success");
        navigator.clipboard.writeText(text1.value);
    }

   
    
      
    return (
        <div>
           <div className="container">
           <br></br>
           <h4 className="text-center" style={{color:props.mode1 === 'light' ? 'black' : 'white'}}>{props.heading}</h4>
           <br></br>
            
               <textarea className="form-control" id="j" rows="8" value={text} onChange={upclick1} ></textarea>
               <br></br>
               
               <button disabled={l}  className={`btn btn-${props.bcolor} mx-2 my-1 shadow `} onClick={upclick} style={{color:'white'}} >Convert to upper Case</button>
               <button disabled={l} className={`btn btn-${props.bcolor} mx-2 my-1 shadow `} onClick={trans}  style={{color:'white'}}>Reverse Sentence</button>
               <button disabled={l}  className={`btn btn-${props.bcolor} mx-2 my-1 shadow `} onClick={handlecopy} style={{color:'white'}}>Copy Text</button>
               
              
              
           </div>
           <br></br>
           <div className="container" style={{color:props.mode1 === 'light' ? 'black' : 'white'}} >
               <h1>Your text summary</h1>
               {/* No. of Words : {text.split('').filter((a1)=>{return a1.length!==0}).length}<br></br> */}
               {/* No. of character: {text.length}<br></br> */}
              
           </div>
        </div>
    )

}
