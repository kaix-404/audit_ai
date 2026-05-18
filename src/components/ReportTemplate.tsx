import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
    color: "#111827",
  },

  hero: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },

  badge: {
    fontSize: 10,
    color: "#7c3aed",
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 13,
    color: "#6b7280",
    lineHeight: 1.6,
  },

  section: {
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111827",
  },

  paragraph: {
    fontSize: 12,
    lineHeight: 1.7,
    color: "#374151",
  },

  card: {
    backgroundColor: "#f3f4f6",
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  bullet: {
    fontSize: 12,
    lineHeight: 1.6,
    color: "#374151",
  },

  footer: {
    marginTop: 40,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },

  footerText: {
    fontSize: 10,
    color: "#9ca3af",
    textAlign: "center",
  },
});

type Props = {
  company: string;
  audit: any;
};

export default function ReportTemplate({
  company,
  audit,
}: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HERO */}
        <View style={styles.hero}>
          <Text style={styles.badge}>
            AI Business Intelligence Report
          </Text>

          <Text style={styles.title}>
            {company} Audit Report
          </Text>

          <Text style={styles.subtitle}>
            Generated using AI-powered business
            analysis and operational intelligence.
          </Text>
        </View>

        {/* OVERVIEW */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Company Overview
          </Text>

          <Text style={styles.paragraph}>
            {audit.companyOverview}
          </Text>
        </View>

        {/* BUSINESS FOCUS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Business Focus
          </Text>

          <Text style={styles.paragraph}>
            {audit.businessFocus}
          </Text>
        </View>

        {/* BOTTLENECKS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Operational Bottlenecks
          </Text>

          {audit.bottlenecks?.map(
            (item: string, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.bullet}>
                  • {item}
                </Text>
              </View>
            )
          )}
        </View>

        {/* AUTOMATION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Automation Opportunities
          </Text>

          {audit.automationOpportunities?.map(
            (item: string, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.bullet}>
                  • {item}
                </Text>
              </View>
            )
          )}
        </View>

        {/* RECOMMENDATIONS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Strategic Recommendations
          </Text>

          {audit.recommendations?.map(
            (item: string, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.bullet}>
                  • {item}
                </Text>
              </View>
            )
          )}
        </View>

        {/* TOOLS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Suggested AI Tools
          </Text>

          {audit.suggestedTools?.map(
            (tool: string, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.bullet}>
                  • {tool}
                </Text>
              </View>
            )
          )}
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Generated automatically using AI-powered
            business intelligence workflows.
          </Text>
        </View>
      </Page>
    </Document>
  );
}