const { observable, autorun, runInAction, action, reaction } = require('mobx');
const state = observable({
    compA : 'A',
    compB : 'B',
    compC : 'C',
    compD : 'D',
});
autorun(()=> {
    console.log('change',state.compA)
});
reaction(()=>state.compB,()=>{console.log('reaction :',state.compB)});
reaction(()=>state.compC,()=>{console.log('reaction :',state.compC)});
reaction(()=>state.compD,()=>{console.log('reaction :',state.compD)});
runInAction(()=>{
    state.compA = 'D';
});
const change = action(()=>{
    state.compD = 'DDDD'
})
setTimeout(()=>{
    runInAction(()=>{
        state.compB = 'GB';
    });
},2000)
setTimeout(()=>{
    runInAction(()=>{
        state.compC = 'EC';
    });
},4000)
setTimeout(change,6000)