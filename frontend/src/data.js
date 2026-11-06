export const projects = [
  {
    id: 'customer-recovery',
    number: '01',
    title: 'Customer Recovery & £10m Expansion Analysis',
    period: 'Aug 2026 – Sep 2026',
    headline: '17x',
    headlineLabel: 'higher value for customers buying across product ecosystems',
    question:
      'Was a UK lifestyle brand’s recovery from its 2023 downturn genuine, and was a £10m expansion justified?',
    data: 'Customer and sales data for a simulated UK lifestyle brand.',
    method: [
      'Checked data quality in SQL: duplicates, missing values and inconsistent records.',
      'Defined the KPIs used to judge the recovery: revenue against the 2022 peak and repeat purchase rate.',
      'Segmented customers with RFM analysis in Python.',
      'Built a three-scenario financial model in Excel.',
      'Delivered a four-page Power BI dashboard using DAX measures.',
    ],
    result:
      'Revenue returned to 97% of its 2022 peak, but the repeat purchase rate fell from 91.9% to 87.5%. None of the three scenarios repaid the £10m within three years on operating profit alone, so the recommendation was to secure a larger margin contribution or a strategic case before proceeding.',
    tech: ['SQL', 'Python', 'Excel', 'Power BI', 'DAX', 'RFM Analysis'],
    github: 'https://github.com/brerubson/anatomy-customer-recovery',
    dashboard: '',
  },
  {
    id: 'uk-retail',
    number: '02',
    title: 'UK Retail Financial Performance Analysis',
    period: 'Jul 2026',
    headline: '20%',
    headlineLabel: 'Next’s operating margin, nearly double its nearest competitor',
    question:
      'How did M&S, Next, Primark and JD Sports perform across seven years, including COVID and the 2022 inflation shock?',
    data: 'Revenue, gross profit, operating profit and net profit for all four retailers, FY2020 to FY2026, cross-verified against statutory accounts and RNS filings.',
    method: [
      'Cleaned and transformed the data in Power Query.',
      'Built the data model in Power BI.',
      'Wrote seven DAX measures to compare four retailers on different fiscal calendars without forcing a false year-on-year alignment.',
      'Designed a five-visual dashboard that reports each company against its own reporting year.',
    ],
    result:
      'Next has the smallest revenue base of the four but the strongest operating margin. M&S’s headline +25% FY2026 growth is largely due to the Ocado Retail consolidation (+1.9% like for like).',
    tech: ['Power BI', 'Power Query', 'DAX', 'Financial Statement Analysis'],
    github: 'https://github.com/brerubson/UK-Retail-Financial-Analysis',
    dashboard: '',
  },
  {
    id: 'portfoliopilot',
    number: '03',
    title: 'PortfolioPilot: Investment Portfolio Simulation',
    period: 'Feb 2026 – May 2026',
    headline: '1.53',
    headlineLabel: 'Sharpe ratio of the best model (Max Sharpe Buy and Hold)',
    question:
      'Which portfolio strategy performs best on five years of real FTSE 100 and FTSE 250 data?',
    data: 'Five years of real FTSE 100 and FTSE 250 market data.',
    method: [
      'Implemented five optimisation models: Equal Weight, Mean Variance, Max Sharpe, Min Variance and Black-Litterman.',
      'Built three forecasting models (Prophet, GRU, Random Forest) to generate 30-day trading signals.',
      'Built a Monte Carlo engine simulating 500 portfolio paths across six market scenarios.',
      'Delivered it as a six-page interactive Streamlit dashboard.',
    ],
    result:
      'The best model, Max Sharpe Buy and Hold, returned 30.8% a year with alpha of +22.5% against the FTSE 100. Prophet reached 61.6% directional accuracy on unseen January 2026 data.',
    tech: ['Python', 'pandas', 'scikit-learn', 'Streamlit', 'Prophet', 'PyTorch'],
    github: 'https://github.com/brerubson/PortfolioPilot',
    dashboard: '',
  },
  {
    id: 'ship-detection',
    number: '04',
    title: 'Satellite Ship Detection using CNNs',
    period: 'Jun 2025 – Jul 2025',
    headline: 'CNN',
    headlineLabel: 'team project, presented to a technical panel',
    question: 'Can a convolutional neural network detect ships in satellite imagery?',
    data: 'Satellite imagery.',
    method: [
      'Built a CNN-based computer vision solution in Python and PyTorch.',
      'Led the team and managed delivery end to end.',
    ],
    result:
      'Presented the findings to a technical panel.',
    tech: ['Python', 'PyTorch', 'NumPy', 'Computer Vision'],
    github: '',
    dashboard: '',
  },
]

export const experience = [
  {
    id: 'practera',
    role: 'Analyst and Quality Assurance Consultant',
    company: 'Practera',
    location: 'London, UK',
    period: 'Feb 2026',
  },
  {
    id: 'power-consult',
    role: 'Project Analyst',
    company: 'Power Consult',
    location: 'Accra, Ghana',
    period: 'Jan 2024 – Nov 2024',
  },
  {
    id: 'capitol',
    role: 'Engineering Data Analyst',
    company: 'Capitol Engineering Ltd.',
    location: 'Accra, Ghana',
    period: 'Oct 2022 – Dec 2023',
  },
  {
    id: 'vra',
    role: 'Engineering Data Analyst',
    company: 'Volta River Authority',
    location: 'Accra, Ghana',
    period: 'Jul 2021 – Aug 2022',
  },
]