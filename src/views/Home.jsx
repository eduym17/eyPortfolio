import {
  asteroid, newBody, inSitu, devStore, pokedex,
} from '../components/utils/images';
import {
  TitleSpaceWordMain, TitleSpaceWordGeneral, TitleAquaWordGeneral, ClickToTop, ProjectCard,
  FormContact,
} from '../components';
import { infoDevStore, infoInSitu, infoPokedex } from '../components/utils/texts';
import {
  iconCSS3, iconExpress, iconFigma, iconGit, iconHTML5, iconIllustrator, iconJavaScript,
  iconJest, iconMongoDB, iconNodeJS, iconPhotoshop, iconPostgreSQL, iconReact, iconVue, iconAzureDevOps,
  iconAzure,
  iconJenkins,
  iconTerraform,
  iconGitHubActions,
  iconPowerShell,
  iconBash,
  iconJava,
  iconElasticSearch,
  iconLogstash,
  iconKibana,
  iconGitHub
} from '../components/utils/icons';

const Home = () => (
  <>
    <div className="containerFullWidth">
      <div
        id="home"
        className="containerContent justify-center pt-20 pb-24 md:flex md:justify-center md:items-center md:gap-4 md:pt-24 md:pb-20"
      >
        <div className="flex flex-col items-center w-[90%] md:w-4/5 md:items-center">
          <TitleSpaceWordGeneral
            title="I am Eduardo"
            magicWord=""
            customClass="text-2xl md:text-4xl font-light text-center"
          />
          <TitleSpaceWordMain
            title="DevOps  Engineer"
            magicWord="DevOps"
            customClass="text-center"
          />
          <p className="w-full leading-none font-extralight opacity-50 pt-4 md:w-full md:text-lg text-center">
            Automation passionate.
          </p>
          <div className="hidden md:flex justify-end w-full pt-14 text-lg ">
            <a
              href="/#contact"
              className="flex items-center gap-2 pb-1 border-b-2 border-transparent hover:border-dev-aqua transition-all duration-500 lg:text-xl"
            >
              <p>Contact me</p>
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.3 19.3q-.275-.275-.288-.7q-.012-.425.263-.7l4.9-4.9H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.175l-4.9-4.9q-.275-.275-.263-.7q.013-.425.288-.7q.275-.275.7-.275q.425 0 .7.275l6.6 6.6q.15.125.213.312q.062.188.062.388t-.062.375q-.063.175-.213.325l-6.6 6.6q-.275.275-.7.275q-.425 0-.7-.275Z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-[90%] flex flex-col items-center md:w-1/2 ">
          {/* <img
            src={asteroid}
            alt={asteroid}
            className="w-1/2 max-w-xs pt-16 md:pt-0 md:max-w-none g:pr-0"
          /> */}
          <div className="flex items-start justify-end w-full pt-14 md:hidden">
            <a
              href="/#contact"
              className="flex items-center justify-end gap-2 border-b-2 hover:border-dev-aqua"
            >
              <p>Contact me</p>
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.3 19.3q-.275-.275-.288-.7q-.012-.425.263-.7l4.9-4.9H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.175l-4.9-4.9q-.275-.275-.263-.7q.013-.425.288-.7q.275-.275.7-.275q.425 0 .7.275l6.6 6.6q.15.125.213.312q.062.188.062.388t-.062.375q-.063.175-.213.325l-6.6 6.6q-.275.275-.7.275q-.425 0-.7-.275Z"
                />
              </svg>
            </a>
          </div>
        </div>
          <div className="w-[90%] flex flex-wrap justify-center pt-8 gap-2 md:w-full md:flex-row md:gap-10">
            <div className="flex gap-1 items-center md:gap-3">
              <div className="font-extrabold text-4xl text-dev-gray-10 md:text-5xl hover:text-dev-aqua">04+</div>
              <div className="text-dev-gray-30 text-sm w-20 md:text-base md:w-24 hover:text-dev-gray-10">years of experience</div>
            </div>
            <div className="flex gap-1 items-center md:gap-3">
              <div className="font-extrabold text-4xl text-dev-gray-10 md:text-5xl hover:text-dev-aqua">10+</div>
              <div className="text-dev-gray-30 text-sm w-20 md:text-base md:w-24 hover:text-dev-gray-10">projects completed</div>
            </div>
            <div className="flex gap-1 items-center md:gap-3">
              <div className="font-extrabold text-4xl text-dev-gray-10 md:text-5xl hover:text-dev-aqua">05+</div>
              <div className="text-dev-gray-30 text-sm w-20 md:text-base md:w-24 hover:text-dev-gray-10">countries engaged</div>
            </div>
          </div>
      </div>
    </div>
    <div className="containerFullWidth bg-dev-blue">
      <div
        id="aboutMe"
        className="containerContent py-12 md:py-16"
      >
        <div className="w-[90%] flex flex-col items-start md:flex-row-reverse md:items-start md:gap-1">
          <div className="flex flex-col items-start  md:w-1/2">
            <TitleAquaWordGeneral
              title="Hi, friend !"
              magicWord="friend"
              customClass=""
            />
            <p className="w-full font-extralight text-sm text-justify whitespace-pre-line md:text-base">
              {`Welcome aboard. Take a seat — this ship runs itself. Because it has to.

                For years, I fought climate change. We thought we were winning the battle — until the asteroid came. Earth was erased. Few survived.

                I wasn’t one of them. Not entirely.

                The impact killed me, but brilliant minds salvaged what they could — my consciousness, now running in a new body. A different species. Abilities I don’t fully understand. But one thing is certain: automation is survival.

                Now, I build: Systems that adapt. Infrastructures that heal. Pipelines that rebuild what we lost.

                Let me show you something I've never expected.
              `}
            </p>
            <ClickToTop customClass="mt-2 hidden md:flex" />
          </div>
          <img
            src={newBody}
            alt={newBody}
            className="w-full pt-10 pb-2 md:w-1/2 md:py-0"
          />
          <ClickToTop customClass="mt-2 md:hidden" />
        </div>
      </div>
    </div>
    <div className="containerFullWidth">
      <div
        id="projects"
        className="containerContent pt-12"
      >
        <div className="w-[90%] flex flex-col items-start">
          <TitleSpaceWordGeneral
            title="My recent projects"
            magicWord="projects"
            customClass="text-3xl md:text-4xl"
          />
          <div className="w-full flex flex-col items-center md:flex-row md:items-start md:gap-3 md:mt-8">
            <ProjectCard
              image={devStore}
              title={infoDevStore.title}
              description={infoDevStore.description}
              stack={infoDevStore.stack}
              linkWebsite={infoDevStore.linkWebsite}
              isWebDisabled={infoDevStore.isWebDisabled}
              linkRepo={infoDevStore.linkRepo}
              isRepoDisabled={infoDevStore.isRepoDisabled}
              customClass="mt-6 md:mt-0"
            />
            <ProjectCard
              image={inSitu}
              title={infoInSitu.title}
              description={infoInSitu.description}
              stack={infoInSitu.stack}
              linkWebsite={infoInSitu.linkWebsite}
              isWebDisabled={infoInSitu.isWebDisabled}
              linkRepo={infoInSitu.linkRepo}
              isRepoDisabled={infoInSitu.isRepoDisabled}
              customClass="mt-8 md:mt-0"
            />
            <ProjectCard
              image={pokedex}
              title={infoPokedex.title}
              description={infoPokedex.description}
              stack={infoPokedex.stack}
              linkWebsite={infoPokedex.linkWebsite}
              isWebDisabled={infoPokedex.isWebDisabled}
              linkRepo={infoPokedex.linkRepo}
              isRepoDisabled={infoPokedex.isRepoDisabled}
              customClass="mt-6 md:mt-0"
            />
          </div>
          <ClickToTop customClass="mt-6" />
        </div>
      </div>
    </div>
    <div className="containerFullWidth">
      <div
        id="stack"
        className="containerContent pt-10 pb-12"
      >
        <div className="w-[90%] flex flex-col items-start">
          <TitleSpaceWordGeneral
            title="My stack"
            magicWord="stack"
            customClass="text-3xl md:text-4xl"
          />
          <p className="w-full font-extralight text-sm text-justify whitespace-pre-line pt-1 md:text-base lg:text-lg">
            Automation | Products | Brands
          </p>
          <div className="w-full items-center py-2">
            <div className="flex flex-col items-center md:self-start">
              <TitleSpaceWordGeneral
                title="Automation"
                magicWord="Automation"
                customClass="text-center text-2xl mt-6 md:text-3xl"
              />
              <div className="w-full flex items-center justify-center gap-3 py-4 md:gap-4">
                <img src={iconAzure} alt={iconAzure} className="w-10" />
                <img src={iconAzureDevOps} alt={iconAzureDevOps} className="w-10" />
                <img src={iconTerraform} alt={iconTerraform} className="w-10" />
                <img src={iconJenkins} alt={iconJenkins} className="w-10" />
                <img src={iconPowerShell} alt={iconPowerShell} className="w-10" />
                <img src={iconBash} alt={iconBash} className="w-10" />
                <img src={iconGitHubActions} alt={iconGitHubActions} className="w-10" />
              </div>
            </div>
          </div>
          <div className="w-full md:flex flex-row place-content-evenly py-2">
            <div className="flex flex-col items-center">
              <TitleSpaceWordGeneral
                title="Monitoring"
                magicWord="Monitoring"
                customClass="text-center text-2xl mt-6 md:mt-0 md:text-3xl"
              />
              <div className="w-full flex items-center justify-center gap-4 py-4 md:gap-4">
                <img src={iconElasticSearch} alt={iconElasticSearch} className="w-10" />
                <img src={iconLogstash} alt={iconLogstash} className="w-10" />
                <img src={iconKibana} alt={iconKibana} className="w-10" />
              </div>
            </div>
            <div className="flex flex-col items-center md:self-end">
              <TitleSpaceWordGeneral
                title="Development"
                magicWord="Development"
                customClass="text-center text-2xl mt-6 md:mt-0 md:text-3xl"
              />
              <div className="w-full flex items-center justify-center gap-4 py-4 md:gap-4">
                <img src={iconJava} alt={iconJava} className="w-10" />
                <img src={iconJavaScript} alt={iconJavaScript} className="w-10" />
                <img src={iconNodeJS} alt={iconNodeJS} className="w-10" />
                <img src={iconGit} alt={iconGit} className="w-10" />
                <img src={iconGitHub} alt={iconGitHub} className="w-10" />
              </div>
            </div>
          </div>
          <ClickToTop customClass="mt-4" />
        </div>
      </div>
    </div>
    <div className="containerFullWidth bg-dev-blue">
      <div
        id="contact"
        className="containerContent pt-12 pb-14 md:py-16 lg:py-20"
      >
        <div className="w-[90%] flex flex-col items-start">
          <div className="w-full flex flex-col md:flex-row md:justify-center md:gap-4">
            <div className="w-full flex flex-col md:w-2/5 md:items-start">
              <TitleSpaceWordGeneral
                title="Do you have a brilliant idea in mind?"
                customClass="leading-none md:mt-2 lg:text-lg"
              />
              <TitleAquaWordGeneral
                title="Contact  me!"
                magicWord="Contact"
                customClass="whitespace-nowrap"
              />
            </div>
            <FormContact customClass="my-6 md:w-1/2 md:my-0" />
          </div>
          <TitleAquaWordGeneral
            title="I'll be happy  to hear from you!"
            magicWord="happy"
            customClass="leading-none text-center text-xl md:mt-10 md:text-2xl"
          />
        </div>
      </div>
    </div>
  </>
);

export default Home;
