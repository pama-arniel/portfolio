<template>
  <div
    class="container text-white font-inter px-10 pt-10 pb-24 mx-auto"
    v-scroll-animation
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      <div
        v-for="(experience, index) in experiences"
        :key="'experience-' + index"
        class="py-4 scale-on-hover"
      >
        <div
          class="experience-card h-full flex flex-col md:flex-row justify-between items-start section-background"
        >
          <div
            class="w-15 md:flex-shrink-0 md:flex md:flex-col text-left leading-none hidden"
          >
            <span class="pb-2 mb-2 border-b-2 border-gray-500">{{
              experience.startDate
            }}</span>
            <span class="title-font leading-none">{{
              experience.endDate
            }}</span>
          </div>
          <div class="flex-grow md:pl-6">
            <p class="leading-relaxed text-gray-600 md:hidden block">
              {{ experience.startDate }} - {{ experience.endDate }}
            </p>
            <h1
              class="experience-position title-font text-3xl mb-2 purple-header align-top"
            >
              {{ experience.position }}
            </h1>
            <h2 class="tracking-widest font-bold">{{ experience.company }}</h2>
            <p class="experience-meta leading-relaxed mb-5 text-gray-500">
              {{ experience.description }}
            </p>
            <div
              v-for="(task, index) in experience.tasks"
              :key="'task-' + index"
              class="experience-task flex items-start gap-3 leading-relaxed mb-6"
            >
              <span class="sm:text-2xl text-sm flex-shrink-0">⚙️</span>
              <span class="text-white align-middle flex">{{ task }}</span>
            </div>
            <a
              :href="experience.website"
              target="_blank"
              class="inline-flex items-center"
            >
              <img
                :alt="`${experience.position} experience`"
                :src="getPic(experience.logo)"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center company-logo"
              />
              <span class="flex-grow flex flex-col pl-3">
                <span class="experience-link title-font">Visit Website &#8599;</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      experiences: [
        {
          startDate: "Jun 2021",
          endDate: "Jul 2026",
          position: "Senior Full Stack Software Engineer",
          company: "CoDev",
          clients: "Dewmaker Design, Lumea, Seikosoft",
          description:
             "Technologies: React, Vue, C#, ASP .NET, Javascript, Copilot, Claude, REST API, HTML, CSS, SQL, PostgreSQL, JIRA, Git, Agile, Scrum, AWS, Tailwind CSS, Slack, GCP, Firebase, Quasar, MirageJS, Pinia, Cypress, Composition API, Confluence, Zeplin.io",
          tasks: [
            "Delivered enterprise web applications for government, healthcare, logistics, and SaaS clients using React, TypeScript, Vue.js, .NET Core, Python, PostgreSQL, and AWS.",
            "Built and maintained full-stack features across modern React and Vue frontends, RESTful APIs, relational databases, and cloud-hosted services, collaborating directly with international clients and cross-functional engineering teams.",
            "Contributed to the development of the Commercial Vehicle Safety Alliance (CVSA) Automated Data System, implementing frontend functionality and backend APIs that support commercial vehicle inspection, compliance, and reporting workflows.",
            "Developed features for the Texas Motor Carrier Credentialing System (Tx-MCCS), helping digitize carrier registration, credentialing, and compliance processes through React, .NET Core, PostgreSQL, and AWS-based infrastructure.",
            "Led the development of a multi-tenant application made using Vue 3 and Firebase for a Texas-based laundry business which involves multiple user types such as a driver, customer, manager, and laundry washboss.",
            "Built responsive healthcare interfaces for Lumea BxLink using Vue 3, Quasar, Tailwind CSS, Pinia, and Cypress, contributing to pathology workflow improvements for hospitals and clinicians.",
            "Recognized with Employee of the Month and Excellent Quality awards for consistently delivering high-quality software and maintaining strong performance evaluations.",
            "Leveraged advanced AI-assisted engineering tools (Claude and Copilot) to optimize SQL query structures, accelerate feature delivery, and refactor code modules safely."
          ],
          logo: "codev.png",
          website: "https://www.codev.com/",
        },
        {
          startDate: "Oct 2020",
          endDate: "June 2021",
          position: "Software Engineer | Web and Mobile",
          company: "Nuvensis",
          description:
             "Technologies: Flutter, Vue, PostgreSQL, GraphQL, Axios, Quasar, Tailwind CSS, Node.js, Figma, Firebase, GCP, Testcafe.io, Sentry, JIRA, Slack, Scrum, Agile, Git",
          tasks: [
            "Contributed to the development of web and mobile marketplace platforms connecting consumers with service providers, working across frontend, backend, and mobile application development.",
            "Built responsive web applications using Vue.js, Quasar, Tailwind CSS, Node.js, GraphQL, and PostgreSQL while collaborating within an Agile engineering team.",
            "Developed Flutter mobile application features including authentication, booking workflows, appointment management, and user profile management for the Booqista consumer platform.",
            "Implemented GraphQL integrations and database-driven functionality supporting consumer and merchant portals, ensuring consistent user experiences across multiple platforms.",
            "Collaborated with designers and product stakeholders to translate Figma designs into responsive, production-ready user interfaces."
          ],
          logo: "nuvensis.png",
          website: "https://nuvensis.ch/",
        },
        {
          startDate: "July 2019",
          endDate: "Aug 2020",
          position: "Full Stack Software Engineer | Squad Lead",
          company: "Channel Info Tech",
          description:
            "Technologies: Vue, Python/Django, REST API, jQuery, HTML, CSS, SQL, PostgreSQL, Confluence, JIRA, Git, Scrum, Agile, AWS",
          tasks: [
            "Developed and maintained large-scale HRIS and recruitment platforms serving business process outsourcing (BPO) operations, delivering features across frontend, backend, and database layers.",
            "Designed relational database schemas and implemented RESTful APIs using Python and Django, supporting scalable business workflows and background task automation.",
            "Built reusable frontend components using Vue.js, JavaScript, HTML, and CSS while integrating backend services into production applications.",
            "Implemented scheduled background jobs, notification services, automated testing, and production bug fixes to improve application reliability and maintainability.",
            "Led code reviews, technical research, and Agile development while mentoring teammates and contributing to software architecture decisions."
          ],
          logo: "bposeats.png",
          website: "https://bposeats.com/",
        },
      ],
    };
  },
  methods: {
    getPic(logoFile) {
      let images = require.context("../assets/experience/", false, /\.png$/);
      return images("./" + logoFile);
    },
  },
};
</script>

<style scoped>
.company-logo {
  box-shadow: 0px 0px 5px #ffffff;
  padding: 7px;
}

.experience-card {
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  transition: transform 0.3s ease, background 0.3s ease,
    border-color 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.experience-position {
  color: #e3d5ff;
}

.experience-meta {
  color: #e5e7eb;
}

.experience-link {
  color: #e3d5ff;
  transition: color 0.2s ease;
}

.experience-link:hover {
  color: #ffffff;
}
</style>
