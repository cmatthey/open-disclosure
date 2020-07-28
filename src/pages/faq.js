import React, { Component } from "react"
import styles from "./faq.module.scss"
import Layout from "../components/layout"
import FAQItem from "../components/faqitem"
import faqHeaderBlob from "./../../static/images/faqHeaderBlob.png"

class FAQ extends Component {
  faq = [
    {
      sectionName: "About the data",
      questions: [
        {
          question: "Where does the data come from?",
          answer:
            "The campaign finance data that Open Disclosure presents is derived primarily from the filings of the California Fair Political Practices Commission (FPPC) Form 460 (Recipient Committee Campaign Statement). Once a campaign committee has raised or spent $2,000 or more it must file Form 460, which contains an overview of the committee’s activity during a specified period.",
        },
        {
          question: "What data is featured on the website?",
          answer: "",
        },
        {
          question: "How up-to-date is the data?",
          answer: "",
        },
        {
          question:
            "Who do I contact if I believe any of this data is incorrect?",
          answer: "",
        },
        {
          question: "What is a non-itemized contribution (small contribution)?",
          answer: "",
        },
        {
          question: "What are San José's campaign finance rules?",
          answer: "",
        },
      ],
    },
    {
      sectionName: "About the candidates",
      questions: [
        {
          question: "Does Open Disclosure endorse third-party candidates?",
          answer: "",
        },
        {
          question:
            "Where do I learn more about local candidates on the upcoming ballot?",
          answer: "",
        },
        {
          question: "Does this site accept donations from local candidates?",
          answer: "",
        },
        {
          question: "Does this site accept donations from local candidates?",
          answer: "",
        },
      ],
    },
  ]

  render() {
    return (
      <Layout>
        <header className={styles.faqHeader}>
          <div className={styles.faqHeaderLeft}>
            <h1>Frequently asked questions</h1>
            <p>Learn more about campaign finance.</p>
          </div>
          <div className={styles.faqHeaderRight}>
            <img src={faqHeaderBlob} />
          </div>
        </header>
        <div className={styles.faqBody}>
          {this.faq.map(faqSection => (
            <section className={styles.faqSection}>
              <h2>{faqSection.sectionName}</h2>
              {faqSection.questions.map(faqItem => (
                <FAQItem {...faqItem} />
              ))}
            </section>
          ))}
        </div>
      </Layout>
    )
  }
}

export default FAQ