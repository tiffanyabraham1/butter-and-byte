
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const COLORS = {
  butter: '#F4DEAF',
  espresso: '#3F1D12',
  cream: '#EDE6D8',
  blue: '#A9C6DA',
  white: '#FFFCF7',
  muted: '#806B5D',
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor={COLORS.cream} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.wordmark}>butter & byte</Text>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>b.</Text>
          </View>
        </View>

        <Text style={styles.eyebrow}>YOUR LITTLE KITCHEN COMPANION</Text>
        <Text style={styles.headline}>
          Something good{'\n'}is cooking.
        </Text>
        <Text style={styles.subtitle}>
          Tell Byte what’s in your kitchen.{'\n'}
          We’ll make something wonderful.
        </Text>

        <View style={styles.searchCard}>
          <Text style={styles.cardLabel}>WHAT’S IN YOUR KITCHEN?</Text>
          <TextInput
            style={styles.input}
            placeholder="eg. eggs, pasta, parmesan..."
            placeholderTextColor={COLORS.muted}
            multiline
          />
          <TouchableOpacity
            style={styles.generateButton}
            onPress={() => {}}
            activeOpacity={0.8}
          >
            <Text style={styles.generateText}>✨  Make me something</Text>
            <Text style={styles.arrow}>↗</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.byteCard}>
          <View style={styles.byteIcon}>
            <Text style={styles.byteEmoji}>✳</Text>
          </View>
          <View style={styles.byteCopy}>
            <Text style={styles.byteTitle}>Meet Byte</Text>
            <Text style={styles.byteDescription}>
              Your AI sous-chef for little cravings and big ideas.
            </Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>A little inspiration</Text>
          <Text style={styles.sectionNote}>MADE FOR TODAY</Text>
        </View>

        <View style={styles.inspirationRow}>
          <View style={[styles.inspirationCard, styles.pastaCard]}>
            <Text style={styles.foodEmoji}>🍝</Text>
            <Text style={styles.foodTitle}>The comfort bowl</Text>
            <Text style={styles.foodSubtitle}>Cozy · 20 min</Text>
          </View>
          <View style={[styles.inspirationCard, styles.breakfastCard]}>
            <Text style={styles.foodEmoji}>🥞</Text>
            <Text style={styles.foodTitle}>Slow morning</Text>
            <Text style={styles.foodSubtitle}>Sweet · 15 min</Text>
          </View>
        </View>

        <Text style={styles.footer}>a little butter. a little brilliance.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  container: {
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 36,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 42,
  },
  wordmark: {
    color: COLORS.espresso,
    fontSize: 23,
    fontWeight: '700',
    letterSpacing: -1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.butter,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: COLORS.espresso,
    fontSize: 18,
    fontWeight: '700',
  },
  eyebrow: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 12,
  },
  headline: {
    color: COLORS.espresso,
    fontSize: 43,
    lineHeight: 49,
    fontWeight: '700',
    letterSpacing: -1.8,
  },
  subtitle: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 14,
    marginBottom: 26,
  },
  searchCard: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 19,
    borderWidth: 1,
    borderColor: '#E4D8C7',
  },
  cardLabel: {
    color: COLORS.muted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 14,
  },
  input: {
    minHeight: 74,
    fontSize: 16,
    color: COLORS.espresso,
    textAlignVertical: 'top',
    paddingTop: 4,
  },
  generateButton: {
    minHeight: 54,
    borderRadius: 16,
    backgroundColor: COLORS.espresso,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  generateText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
  arrow: {
    color: COLORS.butter,
    fontSize: 22,
  },
  byteCard: {
    backgroundColor: COLORS.blue,
    borderRadius: 22,
    padding: 17,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  byteIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#DCEAF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  byteEmoji: {
    color: COLORS.espresso,
    fontSize: 28,
  },
  byteCopy: {
    flex: 1,
  },
  byteTitle: {
    color: COLORS.espresso,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  byteDescription: {
    color: COLORS.espresso,
    fontSize: 12,
    lineHeight: 18,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 15,
  },
  sectionTitle: {
    color: COLORS.espresso,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  sectionNote: {
    color: COLORS.muted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  inspirationRow: {
    flexDirection: 'row',
    gap: 12,
  },
  inspirationCard: {
    flex: 1,
    minHeight: 150,
    borderRadius: 20,
    padding: 14,
    justifyContent: 'flex-end',
  },
  pastaCard: {
    backgroundColor: COLORS.butter,
  },
  breakfastCard: {
    backgroundColor: '#D8E6D3',
  },
  foodEmoji: {
    fontSize: 33,
    marginBottom: 14,
  },
  foodTitle: {
    color: COLORS.espresso,
    fontSize: 15,
    fontWeight: '700',
  },
  foodSubtitle: {
    color: COLORS.muted,
    fontSize: 11,
    marginTop: 5,
  },
  footer: {
    color: COLORS.muted,
    textAlign: 'center',
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 30,
  },
});