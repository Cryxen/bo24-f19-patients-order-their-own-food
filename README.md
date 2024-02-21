This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


---
## Hvordan bruke git med terminal
### Intallere git
Installasjonslenke til git finnes her: [Nettlenke](https://git-scm.com/downloads) <br />
Det eksisterer en god del GUI verktøy for git, inkludert IDE'er som VS Code. 
For å komme i gang med dette repo'et kan du enten: 
#### Benytte git terminal: 
Naviger dit du ønsker å plassere repo'et. 
bruk kommando: `clone https://github.com/Cryxen/bo24-f19-patients-order-their-own-food.git` <br />

### Hvordan vi jobber med git:
#### Branching
Vi jobber i branch. Det vil bli opprettet en branch per person. Til tider vil det være naturlig å jobbe i "under branches" for å kunne bedre versjons-kontrollere. På denne måten så er det enkelt å jobbe med eksperimentelle ting. 

For å lage ny branch: 
`git branch *navn*`

For å bytte mellom brancher
`git checkout *branchnavn*`

Hvordan slå sammen brancer:
- Sørg for å være i branch du ønsker å slå den andre branchen inn i. <br />
`git merge *branchnavn du ønsker skal merge inn*`

#### Laste opp endringer
For å laste opp endringer i terminal gjøres følgende: 
- `git add --all`
- `git commit -m *commit beskjed*`
- `git push`

## Intellij og git
Intellij har en tilsynelatende god git dokumentasjon for hvordan en kan jobbe med versjonskontroll i programvaren: 
[link til intellij sine sider](https://www.jetbrains.com/help/idea/using-git-integration.html)

Personlig synes jeg det er best å benytte IDE for git der IDE'en har god integrasjon. Der det ikke er en god IDE integrasjon er terminal det beste i min mening. Jeg føler det gir best kontroll. Dette er veldig smak og behag, test gjerne litt. 

## VSCode og git
VSCode har også en fin git dokumentasjon: 
[link til visualstudio sine sider](https://code.visualstudio.com/docs/sourcecontrol/overview)

## Kanban tavle
Jeg har opprettet en kanban tavle under prosjekt. Den skal forhåpentligvis være enkel å benytte. Jeg har ikke veldig mye erfaring med den, men jeg tenkte det ville være en god idé å samle verktøy på en plass. Dersom det er ønskelig så kan vi også ta en titt på andre verktøy som Microsoft office planner. 