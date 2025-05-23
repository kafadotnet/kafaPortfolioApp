﻿# kafaPortföljApp Projekt

## Beskrivning

Detta är mitt personligt portfolio-projekt byggt med hjälp av React. Först och framst, är målet med detta projekt en del av klass projekt för att visa upp mina färdigheter som utvecklare och ge en översikt av mina tidigare arbeten och erfarenheter. Portfolion innehåller en interaktiv design, en responsiv layout och funktionalitet som gör att besökare enkelt kan navigera och få information om mina projekt.

## Teknologier som används

- **React**: JavaScript-bibliotek för att bygga användargränssnitt.
- **CSS/SCSS**: För att skapa stil och responsiva designkomponenter.
- **React Router**: För att hantera navigering mellan olika sidor i portfolion.
- **Fetch/useEffect**: För att hämta data (t.ex. från lokal skapade JSON filer) och visa testimonial(referenser), teckSkills och projektinformation dynamiskt.
- **Git**: Versionshantering och samarbete via GitHub.

## Funktioner

•	Interaktiv design: Portfolion är uppbyggd med en modern och responsiv design som fungerar bra både på desktop och mobila enheter. Jag erkänner dock att det fortfarande finns några brist som jag märkte efter deploment/publicering upp till Netlify.
•	Dynamiskt innehåll: Data om mina projekt, testimonials, och teckSkills hämtas från ett lokalt JSON-dokument och visas dynamiskt med hjälp av React genom useEffect() hook.
•	Kontaktformulär: En enkel formulärkomponent för att låta besökare kontakta mig direkt via portfolion.

### Metoder och principer som används

#### 1. Komponentbaserad struktur
Projektet använder Reacts komponentbaserade arkitektur för att skapa små, återanvändbara komponenter. Det gjorde applikationen mer skalbar och lättare att underhålla.
•	Funktionella komponenter: Alla komponenter är skrivna som funktionella komponenter, eftersom dessa är enklare och mer effektiva med de senaste versionerna av React.
•	Hooks: useState och useEffect används för att hantera tillstånd och livscykelmetoder i funktionella komponenter.

#### 2. Responsiv design
Projektet använder media queries i SCSS för att anpassa layouten beroende på skärmstorlek men jag också fick hjälp av Bootstrap på About Me och Stackts sidorna. Detta gör att portfolion ser bra ut på alla enheter, från mobiler till stora desktops.

#### 3. React Router
React Router används för att hantera navigeringen mellan olika sidor inom applikationen. Detta gör det möjligt att ha flera sidor (t.ex. Home, About Me, Portfolio, Testimonials, och Contact Me) utan att ladda om sidan, vilket ger en smidig användarupplevelse.
•	BrowserRouter: För att hantera routing i applikationen.
•	Route: För att definiera de olika vägarna i applikationen.

#### 4. State Management
För enklare tillståndshantering används Reacts inbyggda useState-hook. För mer komplexa tillstånd eller om det skulle vara nödvändigt i framtiden.

#### 5. Asynkrona anrop med useEffect()
För att hämta projektinformation används Fetch/useEffect för att göra asynkrona till en lokal JSON-filer eller, vilket gör att innehållet kan uppdateras dynamiskt utan att ladda om sidan.

#### 6. SCSS
Stilar är uppdelade i flera SCSS-filer för att hålla koden organiserad och lätt att underhålla. SCSS används för att göra CSS mer dynamiskt med variabler och funktioner, vilket gör det enklare att hantera färger, typsnitt och layout.

#### 7. Tillståndshantering i formulär
För formulärhantering används kontrollerade komponenter där värdet på input-fälten är bundet till React:s tillstånd. Detta gör det enkelt att validera och hantera användarinmatning.

#### 9. Versionshantering och GitHub
Projektet använder Git för versionshantering och GitHub som kodförvaringslösning. Alla förändringar dokumenteras genom regelbundna commits och pull requests.




