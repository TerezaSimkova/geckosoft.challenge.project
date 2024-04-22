# GeckoSoftProject

#Tecnologie Utilizzate:

Backend: C#, Entity Framework
Frontend: React, Typescript, Vite
Librerie: Material UI e Material Icons

##Struttura del progetto:

Il progetto segue una disposizione modulare, con i singoli componenti suddivisi in cartelle 
separate e file di stile dedicati. La logica dei singoli componenti lato client è centralizzata 
nel componente principale, WrapperComponent, mentre le funzioni riutilizzabili sono collocate 
nella cartella utilities. Le chiamate alle API sono organizzate in una cartella separata al livello 
dei componenti, facilitandone il richiamo da qualsiasi parte del progetto.

Dal lato server, il progetto è suddiviso in due parti principali: database e core. La cartella del 
database contiene le configurazioni per la generazione del database e le migrazioni di Entity Framework, 
mentre la cartella Core include le singole entità (Gif e User), il modello di logica, i repository 
con le relative logiche, le interfacce e i layer di business separati.

Le dipendenze lato server sono gestite tramite NuGet Package Manager, mentre lato client ho utilizzato
npm. La scelta della libreria Material UI è stata motivata dalla mia esperienza con alcuni 
dei suoi componenti. Mi piace la sua semplicità, il loro design, la possibilità di 
personalizzarli e la rapidità con cui è possibile creare un'interfaccia per offrire una piacevole 
esperienza utente.

##Come avviare il progetto:

1. Scaricare il repository, ramo Master, dal Github repository - geckosoft.challenge.project
2. Npm install per caricare le librerie
3. Il Database viene generato con entity framework, nel file appsetting.json, sostituire i dati del
proprio Database, cosí da poter generare il DB nel locale. 
4. Nella Package manager console/terminal, eseguire il commando Update-database, che applicherá le mie 
precedenti migrazioni al database e lo crea, nel caso migration manca eseguire
il commando Add-Migration CreareDatabase_01 e Update-Database
5. Nel terminal sul progetto - GeckoSoftProject\reactapp> eseguire il commando npm run dev e andare sul
indirizzo web - Local
6.  Per avviare il backend eseguire nel terminal - GeckoSoftProject\webapi> dotnet run --debug

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
