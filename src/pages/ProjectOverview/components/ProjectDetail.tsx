import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useProjectContext } from "../../../contexts/ProjectContext";
import dayjs from "dayjs";

const ProjectDetail = () => {
  const { project } = useProjectContext();

  return (
    <Box
      bgcolor={"#F8FAFC"}
      border={"1px solid #E2E8F0"}
      padding={2}
      borderRadius={"2rem"}
    >
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          Project Detail
        </Typography>
        <Typography variant="body1" fontStyle={"italic"}>
          Start date: {dayjs(project?.startDate).format("DD/MM/YYYY")}
        </Typography>
      </Grid>
      <Box
        mt={2}
        bgcolor={"#FFF"}
        border={"1px solid #E2E8F0"}
        padding={2}
        borderRadius={"1rem"}
      >
        {project?.description}
        {/* <Grid>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            Introduction:
          </Typography>
          <Typography>
            In the ever-evolving world of technology, collaboration and
            efficient project management are the keys to innovation. Our app,
            designed specifically for tech projects, aims to provide an
            all-in-one platform for teams to streamline their workflows, enhance
            communication, and track progress effectively. Whether you are a
            startup, a mid-sized business, or an enterprise-level tech company,
            our app is tailored to meet the needs of modern development
            projects.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            Context:
          </Typography>
          <Typography>
            With the increasing complexity of tech projects, traditional project
            management tools often fail to address the unique requirements of
            software development, hardware design, and IT infrastructure
            projects. Developers, project managers, and tech leaders need tools
            that integrate seamlessly with their existing ecosystems while
            supporting agile methodologies, version control systems, and
            real-time collaboration.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            Features:
          </Typography>
          <ul
            style={{
              paddingLeft: "1rem"
            }}
          >
            <li>
              <Typography>
                Centralized Task Management: Break down projects into tasks,
                assign roles, set deadlines, and prioritize with ease.
              </Typography>
            </li>
            <li>
              <Typography>
                Real-Time Collaboration: Ensure seamless communication and file
                sharing across globally distributed teams.
              </Typography>
            </li>
            <li>
              <Typography>
                Integration with Development Tools: Sync with GitHub, Jira,
                Docker, and CI/CD pipelines to track progress and automate
                workflows.
              </Typography>
            </li>
            <li>
              <Typography>
                Performance Analytics: Monitor key performance indicators (KPIs)
                and gain insights into project timelines, resource allocation,
                and bottlenecks.
              </Typography>
            </li>
            <li>
              <Typography>
                Customization: Tailor workflows and dashboards to align with
                your project requirements, whether you follow Scrum, Kanban, or
                other methodologies.
              </Typography>
            </li>
          </ul>
        </Grid> */}
      </Box>
      {/* <Box
        mt={2}
        bgcolor={"#FFF"}
        border={"1px solid #E2E8F0"}
        padding={2}
        borderRadius={"1rem"}
      >
        <Grid>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            Awards:
          </Typography>
          <ul
            style={{
              paddingLeft: "1rem"
            }}
          >
            <li>
              <Typography>
                Innovation in Project Management 2024 by Tech Innovators Guild
              </Typography>
            </li>
            <li>
              <Typography>
                Best Collaborative Tool for Developers at Global Software Summit
                2024
              </Typography>
            </li>
            <li>
              <Typography>
                User Choice Award at the Productivity App Awards 2025
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            Others:
          </Typography>
          <ul
            style={{
              paddingLeft: "1rem"
            }}
          >
            <li>
              <Typography>Profit Project</Typography>
            </li>
            <li>
              <Typography>Established company since 2025</Typography>
            </li>
            <li>
              <Typography>
                Driven by a passionate team of 5 talented invididuals.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            Contact:
          </Typography>
          <ul
            style={{
              paddingLeft: "1rem"
            }}
          >
            <li>
              <Typography>Email: bentran1vn.github@gmail.com</Typography>
            </li>
            <li>
              <Typography>Phone: 0979901239</Typography>
            </li>
            <li>
              <Typography>Website: www.antree.project.com</Typography>
            </li>
            <li>
              <Typography>Social Media: Antree Facebook</Typography>
            </li>
            <li>
              <Typography>LinkedIn: TechProjectApp</Typography>
            </li>
            <li>
              <Typography>Twitter: @TechProjApp</Typography>
            </li>
            <li>
              <Typography>Facebook: Tech Project App</Typography>
            </li>
          </ul>
        </Grid>
      </Box> */}
    </Box>
  );
};

export default ProjectDetail;
