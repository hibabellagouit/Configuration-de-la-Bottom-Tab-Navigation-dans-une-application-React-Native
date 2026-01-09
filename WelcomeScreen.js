import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Même palette de couleurs que LoginScreen
const colors = {
  primary: '#6366F1',
  primaryLight: '#818CF8',
  accent: '#EC4899',
  background: '#0F172A',
  surface: '#1E293B',
  text: '#F8FAFC',
  textSecondary: '#94A3B8',
  success: '#10B981',
};

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* Cercle décoratif */}
      <View style={styles.decorCircle} />
      
      <View style={styles.content}>
        <Text style={styles.icon}>👋</Text>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>
          Bienvenue sur votre application
        </Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Vous êtes connecté</Text>
          <Text style={styles.cardText}>
            Profitez de toutes les fonctionnalités de l'application.
          </Text>
        </View>

        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Interface moderne</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Navigation fluide</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Design soigné</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
  },
  decorCircle: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.primary,
    opacity: 0.1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  icon: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 8,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    marginTop: 32,
    width: '100%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#334155',
    // Ombre
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.success,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  features: {
    marginTop: 32,
    width: '100%',
    maxWidth: 280,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.success,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  featureText: {
    fontSize: 15,
    color: colors.textSecondary,
  },
});
