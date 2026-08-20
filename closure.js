const createLifeCounter = () =>{
    let lives =3;

    return ()=>{
        if(lives >0){
            lives--;
        }
        return lives;
    }
}

const siamLifeUpdate = createLifeCounter();
const korimLifeUpdate = createLifeCounter()

// console.log(siamLifeUpdate());
// console.log(siamLifeUpdate());
// console.log(siamLifeUpdate());

// console.log(korimLifeUpdate());


