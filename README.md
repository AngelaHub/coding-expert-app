# Coding Expert App

## Overview
The **Coding Expert App** is a mobile application designed to interact with a custom-built backend system. The app fetches and displays data from a database hosted on a remote server. Users can browse through various books categorized by age and genre, view detailed information about each book, and navigate through the app with a user-friendly interface. The app is built using React Native and utilizes Expo for development and testing.

## Installation
To get started with the app, ensure you have the following software versions installed:

- **Node.js**: v18.20.4
- **npm**: v10.7.0

### Steps to Run the App

1. Clone the repository from GitHub:
    ```bash
    git clone https://github.com/AngelaHub/coding-expert-app
    ```

2. Navigate to the project directory:
    ```bash
    cd coding-expert-app
    ```

3. Install all package dependencies:
    ```bash
    npm install
    ```

4. Start the application using Expo:
    ```bash
    npx expo start
    ```

5. A QR code will be displayed in your terminal. Scan this QR code using the Expo Go app on your smartphone to run the app. The Expo Go app is available on both iOS and Android.

**Note**: Ensure you are logged into Expo Go with your account, either by creating a new account or logging in with Google.

## Backend and Database

- **Backend Server**: The backend server is hosted at [https://pt6z-g6cs.accessdomain.com:8443/](https://pt6z-g6cs.accessdomain.com:8443/). Credentials for access are provided separately.

- **Database**: The app interacts with a MySQL database called `anjela_expert`, managed via phpMyAdmin. You can access the database at [https://pt6z-g6cs.accessdomain.com:8443/phpMyAdmin/index.php?db=anjela_expert](https://pt6z-g6cs.accessdomain.com:8443/phpMyAdmin/index.php?db=anjela_expert).

**Note**: The email and password will be handed over per request

## About the App

The Coding Expert App is designed to provide a smooth and engaging user experience by retrieving and displaying book data stored in the `anjela_expert` database. The app fetches this data using the `getBook.php` script, which resides in the root folder of the hosting platform managed via Plesk.

### Features of the App

- **Book Categories**: The app categorizes books by age and genre, allowing users to filter and find books that suit their interests.
- **Book Details**: Users can view detailed information about each book, including the title, author, cover image, section location, and a brief excerpt.
- **Navigation**: The app provides intuitive navigation, including a tab bar that allows users to easily switch between screens and return to the main book list.

The app's interface is built with responsive design principles to ensure usability across a range of devices. The app integrates with the backend seamlessly, providing real-time data updates from the database.

## Future Enhancements

Future versions of the app could include features such as user authentication, personalized book recommendations, and the ability to save favorite books for easier access.

------------------------------

# Coding Expert App

## Overzicht
De **Coding Expert App** is een mobiele applicatie ontworpen om te communiceren met een op maat gemaakt backend-systeem. De app haalt gegevens op en toont deze uit een database die op een externe server wordt gehost. Gebruikers kunnen door verschillende boeken bladeren die zijn gecategoriseerd op leeftijd en genre, gedetailleerde informatie over elk boek bekijken en door de app navigeren met een gebruiksvriendelijke interface. De app is gebouwd met React Native en maakt gebruik van Expo voor ontwikkeling en testen.

## Installatie
Om te beginnen met de app, zorg ervoor dat je de volgende softwareversies hebt geïnstalleerd:

- **Node.js**: v18.20.4
- **npm**: v10.7.0

### Stappen om de App uit te Voeren

1. Klon de repository van GitHub:
    ```bash
    git clone https://github.com/AngelaHub/coding-expert-app
    ```

2. Navigeer naar de projectdirectory:
    ```bash
    cd coding-expert-app
    ```

3. Installeer alle pakketafhankelijkheden:
    ```bash
    npm install
    ```

4. Start de applicatie met Expo:
    ```bash
    npx expo start
    ```

5. Er wordt een QR-code weergegeven in je terminal. Scan deze QR-code met de Expo Go-app op je smartphone om de app uit te voeren. De Expo Go-app is beschikbaar voor zowel iOS als Android.

**Opmerking**: Zorg ervoor dat je bent ingelogd op Expo Go met je account, door een nieuw account aan te maken of in te loggen met Google.

## Backend en Database

- **Backend Server**: De backendserver is gehost op [https://pt6z-g6cs.accessdomain.com:8443/](https://pt6z-g6cs.accessdomain.com:8443/). Inloggegevens voor toegang worden apart verstrekt.

- **Database**: De app communiceert met een MySQL-database genaamd `anjela_expert`, beheerd via phpMyAdmin. Je kunt de database openen via [https://pt6z-g6cs.accessdomain.com:8443/phpMyAdmin/index.php?db=anjela_expert](https://pt6z-g6cs.accessdomain.com:8443/phpMyAdmin/index.php?db=anjela_expert).

## Over de App

De Coding Expert App is ontworpen om een soepele en boeiende gebruikerservaring te bieden door boekgegevens op te halen en weer te geven die zijn opgeslagen in de `anjela_expert` database. De app haalt deze gegevens op met behulp van het `getBook.php`-script, dat zich in de rootmap van het hostingplatform bevindt dat wordt beheerd via Plesk.

### Kenmerken van de App

- **Boekcategorieën**: De app categoriseert boeken op leeftijd en genre, zodat gebruikers boeken kunnen filteren en vinden die bij hun interesses passen.
- **Boekdetails**: Gebruikers kunnen gedetailleerde informatie over elk boek bekijken, inclusief de titel, auteur, omslagafbeelding, sectielocatie en een korte samenvatting.
- **Navigatie**: De app biedt intuïtieve navigatie, inclusief een aangepaste tabbladbalk die gebruikers in staat stelt eenvoudig tussen schermen te schakelen en terug te keren naar de hoofdlijst met boeken.

De interface van de app is gebouwd met responsieve ontwerprincipes om bruikbaarheid op een reeks apparaten te waarborgen. De app integreert naadloos met de backend en biedt realtime gegevensupdates vanuit de database.

## Toekomstige Verbeteringen

Toekomstige versies van de app kunnen functies bevatten zoals gebruikersauthenticatie, gepersonaliseerde boekaanbevelingen en de mogelijkheid om favoriete boeken op te slaan voor gemakkelijker toegang.

