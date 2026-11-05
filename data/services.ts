import { Baby, FilePenLine, HandCoins, Handshake } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { RingsIcon } from "@/components/ui/Icons";

export type ServiceSlug =
  | "divorce"
  | "separation-agreements"
  | "child-access"
  | "child-support"
  | "spousal-support";

export type Service = {
  slug: ServiceSlug;
  title: string;
  cardTitle: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  introHeading: string;
  intro: string[];
  considerations: { title: string; text: string }[];
  help: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "divorce",
    title: "Divorce",
    cardTitle: "Divorce",
    icon: RingsIcon,
    image: "/images/divorce-hands-theme.jpg",
    imageAlt: "Two hands reaching toward each other between tall grey concrete pillars",
    shortDescription: "Strategic, practical guidance through the end of a marriage.",
    description: "Support for clients navigating divorce matters with strategic, practical legal guidance.",
    metaTitle: "Divorce Lawyer Surrey BC | Elizabeth Nijjar Law Corporation",
    metaDescription:
      "Practical, strategic legal guidance for divorce in Surrey, BC, including the divorce process, parenting, support and property issues. Book a consultation.",
    heroLead: "Clear, practical guidance as you bring a marriage to a legal end and plan what comes next.",
    introHeading: "Ending a marriage involves more than one decision",
    intro: [
      "A divorce legally ends a marriage, but the issues around it often matter just as much: where children will live, how support will be handled, and how property and debts will be divided. Addressing these questions carefully can shape your family’s stability for years.",
      "In Canada, divorce is governed by the federal Divorce Act, while many related issues in British Columbia may also fall under the provincial Family Law Act. We help you understand how those rules apply to your circumstances and what your realistic options are.",
    ],
    considerations: [
      {
        title: "Grounds for divorce",
        text: "The legal ground is breakdown of the marriage, most commonly shown by living separate and apart for at least one year. Adultery and cruelty are also recognized.",
      },
      {
        title: "Residency in the province",
        text: "At least one spouse must generally have lived in the province for one year immediately before starting a divorce proceeding there.",
      },
      {
        title: "Uncontested or contested",
        text: "Where spouses agree on the issues, a desk order divorce may be possible. Where they do not, negotiation or court steps may be needed to resolve what remains.",
      },
      {
        title: "Children’s arrangements",
        text: "A court must be satisfied that reasonable arrangements have been made for the support of any children of the marriage before granting a divorce.",
      },
    ],
    help: [
      "Explaining the divorce process and the steps that apply to your situation",
      "Preparing and reviewing court documents",
      "Identifying related parenting, support and property issues early",
      "Negotiating with your spouse or their lawyer toward a practical resolution",
      "Representing your interests if matters cannot be resolved by agreement",
    ],
    faqs: [
      {
        question: "How long do I need to be separated before I can get a divorce?",
        answer:
          "When relying on separation as the ground, you must have lived separate and apart for at least one year by the time the divorce is granted. You may be able to begin the application before the year has passed, and you can often deal with parenting, support and property issues in the meantime.",
      },
      {
        question: "Can we live in the same home and still be separated?",
        answer:
          "It can be possible. The question is whether the relationship has ended, not only whether you share an address. Facts such as how you share finances, meals and household life can matter, so it is worth getting advice specific to your circumstances.",
      },
      {
        question: "Do both spouses have to agree to a divorce?",
        answer:
          "No. One spouse can apply for a divorce without the other’s agreement. However, disagreement about parenting, support or property can affect how the process unfolds.",
      },
      {
        question: "When does a divorce take effect?",
        answer:
          "A divorce generally takes effect on the 31st day after the divorce order is made, unless the court orders otherwise. You can then request a certificate of divorce, which is the document commonly needed before remarrying.",
      },
    ],
  },
  {
    slug: "separation-agreements",
    title: "Separation Agreements",
    cardTitle: "Separation Agreement",
    icon: FilePenLine,
    image: "/images/signing-agreement-theme.jpg",
    imageAlt: "A person in a dress shirt signing a document with a fountain pen",
    shortDescription: "Clear agreements that set out rights and responsibilities.",
    description:
      "Legal assistance preparing and reviewing agreements concerning separation-related rights and responsibilities.",
    metaTitle: "Separation Agreement Lawyer Surrey BC | EN Law Corporation",
    metaDescription:
      "Legal help preparing and reviewing separation agreements in Surrey, BC, covering parenting, support, property and debt. Speak with Elizabeth Nijjar Law Corporation.",
    heroLead:
      "A well-prepared agreement can give both parties certainty without the cost and strain of a contested court process.",
    introHeading: "Put your arrangements on a clear footing",
    intro: [
      "A separation agreement is a written contract between spouses who have separated, or are about to. It can record how you will handle parenting, child support, spousal support, the family home, other property and debts.",
      "An informal understanding can feel like enough at first, but vague or incomplete terms often cause problems later. We prepare and review agreements with attention to clarity, fairness and how the terms will work in everyday life.",
    ],
    considerations: [
      {
        title: "Full financial disclosure",
        text: "Each party should provide complete and accurate information about income, assets and debts. A lack of disclosure can put an agreement at risk.",
      },
      {
        title: "Independent legal advice",
        text: "Each party receiving their own advice helps ensure the terms are understood and supports the strength of the agreement if it is ever questioned.",
      },
      {
        title: "Family and excluded property",
        text: "BC’s Family Law Act generally treats property and debt differently depending on when and how it was acquired. Some property may be excluded from division.",
      },
      {
        title: "Fairness and enforceability",
        text: "A court may set aside or replace terms in some circumstances, such as where an agreement is significantly unfair or was made without proper disclosure.",
      },
    ],
    help: [
      "Drafting a separation agreement tailored to your family’s circumstances",
      "Reviewing an agreement prepared by your spouse or their lawyer",
      "Providing independent legal advice before you sign",
      "Negotiating terms on parenting, support, property and debt",
      "Advising on updating an agreement when circumstances change",
    ],
    faqs: [
      {
        question: "Is a separation agreement legally binding?",
        answer:
          "A properly prepared agreement can be binding and, in certain cases, enforceable through the court once filed. Whether particular terms will hold up depends on factors such as disclosure, fairness and how the agreement was reached.",
      },
      {
        question: "Do we need to be separated for a year first?",
        answer:
          "No. You can make a separation agreement as soon as you separate, and in some cases before you do. The one-year period relates to the ground for divorce, not to the making of an agreement.",
      },
      {
        question: "Does a separation agreement apply if we were not married?",
        answer:
          "Yes. Unmarried spouses can also make agreements. Under BC’s Family Law Act, partners who lived in a marriage-like relationship for at least two years generally have the same property rights as married spouses, and shorter relationships may still give rise to some rights, such as those involving a child.",
      },
      {
        question: "Can a separation agreement be changed later?",
        answer:
          "Yes, by a further written agreement between you. Parenting and child support terms in particular may need to change as children grow, and a court may also be able to vary some terms in appropriate circumstances.",
      },
    ],
  },
  {
    slug: "child-access",
    title: "Child Access / Parenting Time",
    cardTitle: "Child Access",
    icon: Baby,
    image: "/images/family-sunset-theme.jpg",
    imageAlt: "A family standing together in silhouette on a beach at sunset",
    shortDescription: "Parenting arrangements centred on your child’s best interests.",
    description: "Guidance regarding parenting arrangements, access and related family-law matters.",
    metaTitle: "Child Access & Parenting Time Lawyer Surrey BC | EN Law",
    metaDescription:
      "Guidance on parenting time, child access, guardianship and parenting arrangements in Surrey, BC, focused on the best interests of your child.",
    heroLead: "Thoughtful guidance on parenting arrangements that support your children and work in real life.",
    introHeading: "Keeping children at the centre of the plan",
    intro: [
      "Few family law issues feel more personal than where your children will live and how they will spend time with each parent. Many people still call this “child access” or “custody”, but current law uses terms such as parenting time, parenting responsibilities, decision-making responsibility and contact.",
      "Whether you are building a schedule from the start or a current arrangement has stopped working, we help you understand the law and pursue an arrangement focused on your child’s needs.",
    ],
    considerations: [
      {
        title: "Best interests of the child",
        text: "This is the only consideration when a court decides parenting arrangements. It includes the child’s health, emotional well-being, views where appropriate, and need for stability.",
      },
      {
        title: "Parenting time and responsibilities",
        text: "Parenting time is when a child is in a parent’s care. Parenting responsibilities cover decisions such as schooling, health care and activities, and can be shared or divided.",
      },
      {
        title: "Family violence and safety",
        text: "Courts must consider the impact of any family violence on a child’s safety and well-being. If you have safety concerns, tell your lawyer early. If you are in immediate danger, call 911.",
      },
      {
        title: "Relocation",
        text: "Moving with a child can involve written notice requirements and may require agreement or a court order, particularly if it will significantly affect the child’s relationship with others.",
      },
    ],
    help: [
      "Advising on parenting time, parenting responsibilities and guardianship",
      "Helping you develop a detailed, workable parenting plan",
      "Negotiating parenting agreements",
      "Applying for or responding to parenting orders",
      "Advising when an existing order or agreement needs to change",
    ],
    faqs: [
      {
        question: "What is the difference between custody, access and parenting time?",
        answer:
          "“Custody” and “access” are older terms that many people still use. BC’s Family Law Act refers to guardianship, parenting time, parenting responsibilities and contact, while the federal Divorce Act refers to parenting time, decision-making responsibility and contact. Which law applies can depend on your situation.",
      },
      {
        question: "Does a child get to choose where they live?",
        answer:
          "There is no specific age at which a child decides. A child’s views may be considered, unless that would be inappropriate, and generally carry more weight as the child matures. They are one factor among others in assessing the child’s best interests.",
      },
      {
        question: "Is equal parenting time automatic?",
        answer:
          "No. There is no presumption that parenting time must be divided equally. Arrangements depend on what is in the best interests of the particular child.",
      },
      {
        question: "Can a parenting order be changed?",
        answer:
          "A parenting order may be changed by a court where there has been a change in circumstances. Parents who agree on a change should still get advice about how to record it properly.",
      },
    ],
  },
  {
    slug: "child-support",
    title: "Child Support",
    cardTitle: "Child Support",
    icon: HandCoins,
    image: "/images/child-support-paperwork-theme.jpg",
    imageAlt: "Financial forms, a calculator and a cup of coffee laid out on a dark desk",
    shortDescription: "Help with obligations, calculations and related issues.",
    description: "Assistance with child-support obligations, calculations and related legal issues.",
    metaTitle: "Child Support Lawyer Surrey BC | Elizabeth Nijjar Law Corporation",
    metaDescription:
      "Assistance with child support in Surrey, BC, including guideline calculations, special expenses, income issues and changes to existing orders or agreements.",
    heroLead: "Accurate calculations and sound advice, so your child’s financial needs are properly addressed.",
    introHeading: "Support that reflects the right numbers",
    intro: [
      "Child support is the right of the child. It helps ensure children continue to benefit from the financial support of both parents after separation, and a parent generally cannot simply give it up on the child’s behalf.",
      "The amount is usually set using the Federal Child Support Guidelines, but the result depends on accurate income information and the parenting arrangement. We help you work through the figures and the issues that can change them.",
    ],
    considerations: [
      {
        title: "Guideline table amounts",
        text: "The base amount generally depends on the paying parent’s income, the number of children and the applicable provincial table.",
      },
      {
        title: "Special or extraordinary expenses",
        text: "Often called “section 7” expenses, these may include child care, certain health costs and post-secondary education, and are usually shared in proportion to income.",
      },
      {
        title: "Shared or split parenting",
        text: "Where children spend at least 40% of their time with each parent, or live with different parents, the calculation can differ from the standard approach.",
      },
      {
        title: "Determining income",
        text: "Self-employment, corporate income, variable earnings or unreported income may require closer analysis. In some cases, income can be imputed.",
      },
    ],
    help: [
      "Estimating support under the applicable guidelines",
      "Reviewing financial disclosure and income questions",
      "Addressing special or extraordinary expenses",
      "Preparing or reviewing child support terms in agreements",
      "Seeking or responding to a change in an existing order or agreement",
    ],
    faqs: [
      {
        question: "How long does child support continue?",
        answer:
          "It does not always stop at a set age. In BC, the age of majority is 19, but support may continue for an adult child who cannot withdraw from their parents’ charge because of illness, disability, full-time education or another reason. The answer depends on the child’s circumstances.",
      },
      {
        question: "Can child support be changed?",
        answer:
          "Yes, where there has been a change in circumstances, such as a significant change in income or in parenting arrangements. A change should be properly documented through an agreement or a court order, and it is best not to simply stop or reduce payments.",
      },
      {
        question: "If I do not see my child, do I still pay support?",
        answer:
          "Generally, yes. Child support and parenting time are separate issues. A parent usually cannot withhold support because of a parenting dispute, or deny parenting time because support has not been paid.",
      },
      {
        question: "What information do I need to exchange?",
        answer:
          "Typically, recent income tax returns and notices of assessment, along with current proof of income. Self-employed parents or those with corporate interests may need to provide additional financial records.",
      },
    ],
  },
  {
    slug: "spousal-support",
    title: "Spousal Support",
    cardTitle: "Spousal Support",
    icon: Handshake,
    image: "/images/spousal-support-meeting-theme.jpg",
    imageAlt: "Two people reviewing paperwork together across a table",
    shortDescription: "Guidance on entitlement, obligations and arrangements.",
    description: "Legal guidance regarding entitlement, obligations and support arrangements.",
    metaTitle: "Spousal Support Lawyer Surrey BC | Elizabeth Nijjar Law Corporation",
    metaDescription:
      "Legal guidance on spousal support in Surrey, BC, including entitlement, amount, duration, agreements and changes to existing support arrangements.",
    heroLead:
      "Practical advice on whether support may be payable, how much, and for how long, whichever side you are on.",
    introHeading: "A question of entitlement first",
    intro: [
      "Spousal support is not automatic. Unlike child support, the first question is whether a person is entitled to it at all, and only then how much should be paid and for how long.",
      "Support can recognize the economic effects of a relationship and its breakdown, such as time away from a career to care for children, or financial need after separation. Whether you may receive or pay support, we help you understand where you stand.",
    ],
    considerations: [
      {
        title: "Entitlement",
        text: "Entitlement may arise on compensatory, needs-based or contractual grounds. The length of the relationship, each person’s roles and their financial circumstances all matter.",
      },
      {
        title: "Amount and duration",
        text: "The Spousal Support Advisory Guidelines are commonly used to estimate ranges. They are advisory rather than binding, and the facts of each case remain important.",
      },
      {
        title: "Unmarried spouses",
        text: "Under BC’s Family Law Act, partners may have a claim after living in a marriage-like relationship for at least two years, or for less time if they have a child together.",
      },
      {
        title: "Time limits",
        text: "Time limits can apply to a spousal support claim under the Family Law Act, generally running from a divorce or, for unmarried spouses, from separation. Getting advice early helps protect your position.",
      },
    ],
    help: [
      "Assessing potential entitlement based on your circumstances",
      "Reviewing income information and estimating likely ranges",
      "Negotiating support terms and documenting them in an agreement",
      "Applying for or responding to a support claim",
      "Advising on reviewing or changing existing arrangements",
    ],
    faqs: [
      {
        question: "Will I automatically receive or have to pay spousal support?",
        answer:
          "No. There is no automatic right to spousal support. Entitlement must first be established based on the circumstances of the relationship and of each spouse.",
      },
      {
        question: "How is spousal support calculated?",
        answer:
          "The Spousal Support Advisory Guidelines are often used to produce a range for amount and duration. Results depend on factors such as each person’s income, the length of the relationship and whether child support is also payable.",
      },
      {
        question: "How long does spousal support last?",
        answer:
          "It varies. Support may be for a fixed period, may be reviewed at a later date, or may have no specific end date. The length of the relationship and each spouse’s situation are often key factors.",
      },
      {
        question: "Can spousal support be changed after it is set?",
        answer:
          "It can often be varied where circumstances have materially changed, although the terms of the order or agreement matter. Some agreements limit the ability to change support, so professional advice is important.",
      },
    ],
  },
];

export function getService(slug: ServiceSlug): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
