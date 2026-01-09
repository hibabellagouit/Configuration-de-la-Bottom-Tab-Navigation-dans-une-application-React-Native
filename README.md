# Premier App

Application mobile React Native / Expo avec navigation par onglets en bas de l'écran.

## 📱 Aperçu

Cette application démontre une implémentation de la **navigation par onglets** avec React Navigation, comprenant deux écrans principaux :

- **Connexion** : Écran de connexion avec formulaire (email, mot de passe) et interface moderne
- **Bienvenue** : Écran d'accueil affiché après connexion

## ✨ Fonctionnalités

- Navigation par onglets en bas de l'écran
- **Écran Connexion** :
  - Champs : Adresse email et Mot de passe
  - Bouton « Se connecter »
  - Lien « Mot de passe oublié ? »
  - Bouton « Créer un compte »
  - Design moderne avec thème sombre (indigo/violet)
- **Écran Bienvenue** :
  - Message de bienvenue
  - Carte d'information
  - Liste des fonctionnalités
- Interface adaptative avec `KeyboardAvoidingView` et `ScrollView`
- Palette de couleurs harmonisée sur tous les écrans

## 🛠️ Technologies

- **React Native** — Framework mobile multiplateforme
- **Expo** — Plateforme de développement et déploiement
- **React Navigation** — Gestion de la navigation
  - `@react-navigation/native` — Navigation de base
  - `@react-navigation/bottom-tabs` — Navigation par onglets

## 📋 Prérequis

- **Node.js** (version 18 ou supérieure recommandée)
- **npm** ou **yarn**
- **Expo CLI** : `npm install -g expo-cli`
- **Expo Go** (sur appareil physique) ou **émulateur** (Android Studio / Xcode)

## 🚀 Installation

1. **Accéder au projet**
   ```bash
   cd premier-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application**
   ```bash
   npx expo start
   ```

4. **Ouvrir l'application**
   - **Android** : Appuyez sur `a` dans le terminal ou scannez le code QR avec Expo Go
   - **iOS** : Appuyez sur `i` dans le terminal (simulateur) ou scannez avec l'appareil photo
   - **Web** : Appuyez sur `w` dans le terminal

### Commandes utiles

```bash
# Démarrer en vidant le cache (en cas de problème)
npx expo start --clear

# Lancer directement sur Android
npm run android

# Lancer directement sur iOS
npm run ios

# Lancer sur le web
npm run web

# Vérifier le code (analyse statique)
npm run lint
```

## 📁 Structure du projet

```
premier-app/
├── App.js                 # Point d'entrée — Configuration de la navigation par onglets
├── LoginScreen.js         # Écran de connexion avec formulaire
├── WelcomeScreen.js       # Écran d'accueil / bienvenue
├── app.json               # Configuration Expo
├── package.json           # Dépendances du projet
├── assets/                # Images et ressources
├── components/            # Composants réutilisables (modèle Expo)
├── app/                   # Dossier Expo Router (non utilisé, point d'entrée : App.js)
└── README.md              # Ce fichier
```

## 🎨 Design

L'application utilise une **palette de couleurs moderne** avec thème sombre :

| Couleur | Code | Utilisation |
|---------|------|-------------|
| Fond | `#0F172A` | Arrière-plan principal |
| Surface | `#1E293B` | Cartes et composants |
| Primaire | `#6366F1` | Boutons, éléments d'accent |
| Primaire clair | `#818CF8` | Liens, onglet actif |
| Texte | `#F8FAFC` | Texte principal |
| Texte secondaire | `#94A3B8` | Étiquettes, sous-titres |

## 📦 Dépendances principales

| Package | Version | Description |
|---------|---------|-------------|
| react | 19.1.0 | Bibliothèque d'interface utilisateur |
| react-native | 0.81.5 | Framework mobile |
| expo | ~54.0.31 | Plateforme Expo |
| @react-navigation/native | ^7.1.26 | Navigation |
| @react-navigation/bottom-tabs | ^7.9.0 | Onglets en bas de l'écran |

## 🔧 Configuration

Le point d'entrée de l'application est configuré dans `package.json` :

```json
{
  "main": "node_modules/expo/AppEntry.js"
}
```

Le fichier `expo/AppEntry.js` charge automatiquement le composant `App` depuis `App.js` à la racine du projet.

## 📝 Écrans

### Écran de connexion (LoginScreen)
- Formulaire avec champs email et mot de passe
- Gestion du clavier (`KeyboardAvoidingView`)
- États visuels des boutons (appui)
- Liens : mot de passe oublié, création de compte

### Écran de bienvenue (WelcomeScreen)
- Message de bienvenue personnalisé
- Carte d'information « Vous êtes connecté »
- Liste des fonctionnalités de l'application

<img width="1366" height="728" alt="Login - Google Chrome 09_01_2026 19_06_53" src="https://github.com/user-attachments/assets/3b378d25-d872-4ceb-bc41-a49a2ab84d32" />
<img width="1366" height="728" alt="Login - Google Chrome 09_01_2026 19_07_01" src="https://github.com/user-attachments/assets/78029cf5-911f-4aef-90ed-7d6402881945" />

