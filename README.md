# Api-graphql-fokontany

### Pour lancer le server
- En mode développement (avec nodemon)
`npm run dev:server`

- En mode production (avec node)
`npm run prod:server`

## Au demmarage:
J'essaie d'insérer toutes les données incluses dans le fichier fokontany JSON que vous m'aviez donné. Si j'ai bien compris, je suppose que c'est ce que je devais faire.

## Query/Mutation fonctionnels:
- Pour récupérer toutes les foskontany.   
`getAllfokontany{
...
}`

- Pour récupérer un fokontany par id.   
`getfokontany(_id: <id_du_fokontany>){
...
}`

- Pour la partie pagination.   
`getPagefokontany(PAGE:<numero_de_page){
    ...    
 }`

- Pour ajouer un fokontany.   
`addFokontany(donnees_du_fokontany{
...
}`

- Pour mettre à jour un fokontany.    
`updateFokontany(donnees_du_fokontany{
...
}`

- Pour supprimer un fokontany.   
`deleteFokontany(_id: id_du_fokontany){
...
}
`


> J'ai pas mal utilisé `async/wait` pour les requêtes non bloquante.   
> Ceci est réglé maintenant, je viens de trouvé le problème -> Un problème que j'ai remarqué sur la récupération de données avec `getAllFokontany` c'est que des fois ça lague et ça provoque une erreur. Je pense que c'est lié au nombre de données récupérées car si on limite les données à récupéré, il n'y a aucun problème. 

