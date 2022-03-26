// code your solution here
// code your solution here
function saturdayFun(paramererOne = "roller-skate"){

    const msg2 = "This Saturday, I want to bathe my dog!"
    
    if(paramererOne == "bathe my dog")
        return msg2
    else 
        return "This Saturday, I want to roller-skate!"
       
    }
    // console.log(saturdayFun("bathe my dog"))
    console.log(saturdayFun())
    
    
    function  mondayWork(defaultParameter = " go to the office"){
    
        let msg = "This Monday, I will work from home."
    
        if(defaultParameter == "work from home")
            return msg
        else    
            return "This Monday, I will go to the office."
    }
    
    
    function wrapAdjective(wrapper = "*"){
        
        const result = function(){
        }
        const emphatic = function(msg = "a hard worker"){
            return `You are ${wrapper}${msg}${wrapper}!`
        }
        return emphatic("a dedicated programmer")
    
    }
    wrapAdjective("||")
    console.log(wrapAdjective("||"))
    
    