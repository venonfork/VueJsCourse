new Vue({
        el:"#app",
        data:{
                state: true,
                inputName:'',
                names: [], 
               

²
        },
        methodes:{
                addNameToList(){
                      if (this.Validity(this.inputName)){
                              this.names.push(this.inputName)
                              this.inputName= ''
                              this.ShowError=false
                      }  else{
                              this.ShowError= true
                      }
                },
                Validity(value){
                   if (this.inputName = ''){
                           return true
                   }else{
                           return false
                   }
                }

        }
})
























































// Creer un nouvelle objet Vue ({
        // appeller l id #app,
        // Creer un objet Data:{
                // etape 1 : creer une variable de state a true qui represente la premiere page 
                // etape 2 : creer une variable input qui recupere l'element de linput 
                // etape 3 : creer une liste vide qui va recuperer les elements pour les ajouter a la liste  
                // etape 4 : creer une variable showError a false 
                // etape 5 : creer une variable result vide  
        
        
        // },
        // Creer un objet methode{
                // etape 1 :Creer une fonction addNameToList
// * il y une condition if avec comme comparaison la valeur valider(la valeur entrer en input)
// ______________la valeur enterer qu on ajoute a la liste
// ______________la valeur input devient vide
// ______________la valeur showError passe a false
// * il y une condition else avec comme fin 
// ______________la valeur showError qui  passe a false

//----------------------------------------------------------------------------------------------------------------------------
                // etape 3 : Creer une fonction RemoveName (avec comme argument l'index )
                        // on vise la valeur name que l on efface (index, 1)


//----------------------------------------------------------------------------------------------------------------------------


                // etape 2 :Creer une fonction validate (avec comme argument la valeur )
                //  on creer une condition if else qui retourne true ou false 



//----------------------------------------------------------------------------------------------------------------------------

                // etape 4 : Creer une fonction showResultat
                        // creer une variable rand qui retourne un random de de liste 
                        // la variable doit etre a result 
                        // la state doit etre doit etre false pour afficher une nouvel page avec le result

//----------------------------------------------------------------------------------------------------------------------------


                // etape 5 : Creer une fonction qui resetApp toutes les valeurs 
                            // pour chaque valeur remplis 
                            // state doit passer a true 
                            // name doit etre vide 
                            // result doit etre vide(empty)


        // }

// })


