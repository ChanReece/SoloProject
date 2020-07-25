const software = [
  {
    name: "Jerry James",
    company: "GoDaddy",
    position: "Software Devloper IV for UX/UI Design",
    review:
      "Respectful, well funded, and generally a great place to forward your career Pro: You may get to work on something that can change the world and get paid well for doing it.Con: The company is far too large and opaque for you to make any difference in the company or understand the company as a whole. You will also very likely be forced into a niche where you will learn less and less as time goes on ",
  },
  {
    name: "Evan Wood",
    company: "Aloe Care Health",
    position: "Mobile Software Engineer Intern",
    review:
      "American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware.",
  },
  {
    name: "Barnaby Snow",
    company: "Raytheon Technologies",
    position: "Software Engineer Intern",
    review:
      "Smart colleagues and amazing tools and great perks, but moves too fast and has such high turnover / internal move rate that the codebase (payments stack) was out of control. Too many layers of detritus -> too much time was required to understand what the heck was going, and by that time it had changed, and/or the whole group had been re-seated and re-assigned.",
  },
  {
    name: "Theia Valencia",
    company: "Boeing",
    position: "Sr Software Development Engineer",
    review:
      "It was great and fulfilling to work here for a few years but after that it is wise to move on to higher paying jobs where you can be more effective. Also staying here can get you locked in to their proprietary tools and make it harder for you to start at another company",
  },
  {
    name: "Marni Buckner",
    company: "Amazon",
    position: "Software Development Engineer II - Test",
    review:
      "very challenging and interesting. New requirements and there will be number of opportunities to grow in your career. We have a large scope in learning new technologies and improvise our skills.",
  },
  {
    name: "Zaid Ford",
    company: "Adobe",
    position: "Software Devloper Intern - Machine Learning",
    review:
      "Was very frustrating from the perspective of an employee of a startup that was acquired. After getting acquired, all the state-of-the-art competitive software had to be re-written to fit Google's standards: coding style, build tools, and software libraries and protocols. This felt the opposite of freedom. Also, it was super hard even getting our first code checked into the monolithic codebase, as no one in the company had readability in any programming languages.",
  },
  {
    name: "Tanner Frederick",
    company: "datat3",
    position: "Software Devloper IV for UX/UI Design",
    review:
      "My experience at google was overall very good. Even though I was an intern I was treated as if I were a full-time employee. My coworkers were open to helping me with problems I had, and the work was challenging but achievable. The campus is large and had many varied places employee's could eat and relax at. The offices were well lit and fostered collaboration in their open design.",
  },
];

const legal = [
  {
    name: "Grady Jackson",
    company: "Disability Rights",
    position: "Law Clerks Interns",
    review: "Job was solid",
  },
  {
    name: "Chantel Devine",
    company: "Calhoun Bhella & Sechrest Llp",
    position: "Health Law Associate",
    review: "Job was solid",
  },
  {
    name: "Susannah Shelton",
    company: "Calhoun Bhella & Sechrest Llp",
    position: "Software Devloper IV for UX/UI Design",
    review: "Job was solid",
  },
  {
    name: "Levison Sumner",
    company: "Lone Star Legal Aid",
    position: "Staff Attorney",
    review: "Job was solid",
  },
  {
    name: "Koby Avalos",
    company: "Devadoss Law Firm, P L L C",
    position: "Associate Attorney - Litigation",
    review: "Job was solid",
  },
  {
    name: "Timothy Baird",
    company: "Mugg Winston",
    position: "Legal Intern",
    review: "Job was solid",
  },
  {
    name: "Ted Monroe",
    company: "Spencer Reed Group",
    position: "Corporate Counsel - Technology Transactions",
    review: "Job was solid",
  },
];

const medical = [
  {
    name: "Catrina Milner",
    company: "UT Southwestern Medical Center",
    position: "Student Intern",
    review: "Job was solid",
  },
  {
    name: "Lucille Nash",
    company: "Steward Health Care",
    position: "Clinical Dietitian",
    review: "Job was solid",
  },
  {
    name: "Corinne Bob",
    company: "HV Family Medicine",
    position: "Medical Assistant",
    review: "Job was solid",
  },
  {
    name: "Horace Myers",
    company: "OPCO Skilled Management",
    position: "CNA Trainee",
    review: "Job was solid",
  },
  {
    name: "Mylah Baldwin",
    company: "Privia Health",
    position: "Health Care Operations Internship",
    review: "Job was solid",
  },
  {
    name: "Lewie Hirst",
    company: "Longview Regional",
    position: "Nurse Intern - ICU",
    review: "Job was solid",
  },
  {
    name: "Dannielle Sutherland",
    company: "White County Medical Center",
    position: "Pharmaceutical Intern",
    review: "Job was solid",
  },
];

export default {
  getSoftwareInternships: function () {
    return software;
  },
  getLegalInternships: function () {
    return legal;
  },
  getMedicalInternships: function () {
    return medical;
  },

  addSoftwareInternships: function (newsoftware) {
    software.push(newsoftware);
    return software;
  },
  addLegalInternships: function (newlegal) {
    legal.push(newlegal);
    return legal;
  },
  addMedicalInternships: function (newmedical) {
    medical.push(newmedical);
    return medical;
  },
};
