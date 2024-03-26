import * as React from "react";
import { SVGProps } from "react";

export const GithubSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={4}
        x2={44}
        y1={23.508}
        y2={23.508}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#4c4c4c" />
        <stop offset={1} stopColor="#343434" />
      </linearGradient>
    </defs>
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
    >
      <path
        fill="url(#a)"
        d="M24 4C12.954 4 4 12.954 4 24c0 8.887 5.801 16.411 13.82 19.016h12.36C38.199 40.411 44 32.887 44 24c0-11.046-8.954-20-20-20z"
        transform="matrix(6.4 0 0 6.4 -25.6 -25.6)"
      />
      <path
        fill="#000"
        d="m166.464 243.174-.064-37.107c0-6.01-1.408-11.878-4.109-17.197 36.102-7.25 53.67-28.595 53.67-65.132 0-14.432-4.256-27.175-12.646-37.888a37.997 37.997 0 0 0 1.408-6.279c1.203-8.761-.147-14.49-1.235-19.097l-.173-.743c-1.19-5.094-2.618-8.73-2.675-8.883l-.71-1.805-.71-1.805-1.934-.204-1.939-.205s-1.274-.135-3.206-.135c-2.682 0-6.656.27-10.413 1.543l-1.255.422c-4.736 1.594-9.21 3.104-15.468 6.842a186.226 186.226 0 0 0-5.978 3.737c-9.69-2.4-20.115-3.622-31.027-3.622-11.02 0-21.536 1.229-31.29 3.654a192.353 192.353 0 0 0-6.028-3.77c-6.26-3.737-10.733-5.24-15.47-6.84l-1.254-.423c-3.744-1.274-7.724-1.543-10.406-1.543-1.933 0-3.206.135-3.206.135l-1.933.205-1.92.198-.717 1.798-.723 1.812c-.064.166-1.491 3.801-2.682 8.902l-.173.736c-1.088 4.602-2.438 10.336-1.235 19.091.307 2.215.8 4.384 1.472 6.47-8.224 10.663-12.39 23.335-12.39 37.697 0 36.447 17.587 57.779 53.74 65.087a38.434 38.434 0 0 0-2.892 7.834c-1.261.429-2.42.717-3.443.877-1.524.23-3.117.345-4.73.345-4.39 0-7.84-.857-9.184-1.657-2.003-1.19-5.58-4.653-9.05-9.715-2.963-4.32-7.584-9.972-12.748-12.333-4.468-2.042-9.197-3.213-12.986-3.213-.883 0-1.696.064-2.406.18-3.31.524-6.074 2.342-7.578 4.991-1.3 2.285-1.504 4.947-.563 7.303 1.401 3.507 5.446 6.304 8.595 8.032 1.549.85 4.896 3.961 6.848 7.097 1.466 2.355 2.144 4.032 3.085 6.35a105.038 105.038 0 0 0 2.003 4.684c3.008 6.54 12.397 12.313 13.46 12.947 5.158 3.091 13.83 4.083 20.204 4.371l.787.02h.007c1.536 0 3.648-.148 6.425-.455v16.723c.013 3.386-3.437 4.154-8 4.083l3.5 1.178C98.529 253.261 112.929 256 128 256c15.073 0 29.473-2.74 42.9-7.527l4.5-1.676c-4.551-.154-8.897-.896-8.935-3.623z"
        opacity={0.05}
      />
      <path
        fill="#000"
        d="M171.398 248.3c-2.598.301-8.198-.697-8.198-5.087v-37.146c0-7.002-2.1-13.766-5.99-19.533 37.855-6.125 55.545-26.195 55.545-62.796 0-14.317-4.39-26.842-13.05-37.261a34.27 34.27 0 0 0 1.844-7.341c1.12-8.166-.103-13.35-1.178-17.926l-.173-.743c-1.139-4.87-2.483-8.3-2.54-8.441l-.71-1.805-1.94-.205s-1.14-.122-2.874-.122c-2.438 0-6.041.237-9.382 1.376l-1.255.423c-4.57 1.542-8.89 2.995-14.854 6.553a187.117 187.117 0 0 0-7.046 4.442c-9.812-2.566-20.43-3.872-31.597-3.872-11.277 0-21.984 1.312-31.866 3.904a200.923 200.923 0 0 0-7.097-4.474c-5.965-3.558-10.285-5.017-14.855-6.553l-1.254-.423c-3.334-1.132-6.944-1.376-9.382-1.376-1.735 0-2.874.122-2.874.122l-1.933.205-.723 1.811c-.058.14-1.402 3.571-2.54 8.442l-.174.742c-1.081 4.576-2.304 9.754-1.177 17.92a34.23 34.23 0 0 0 1.907 7.514c-8.493 10.368-12.794 22.828-12.794 37.088 0 36.499 17.703 56.563 55.59 62.758a34.848 34.848 0 0 0-5.202 12.57c-2.112.831-4.026 1.382-5.703 1.638a34.776 34.776 0 0 1-5.21.384c-4.415 0-8.659-.826-10.815-2.106-2.816-1.67-6.765-5.85-10.061-10.656-2.24-3.264-6.701-9.069-11.443-11.232-4.064-1.856-8.308-2.925-11.655-2.925-.704 0-1.344.052-1.907.141-2.342.371-4.275 1.613-5.3 3.418-.818 1.433-.953 3.091-.377 4.531 1.146 2.867 5.389 5.44 7.162 6.413 2.144 1.177 5.881 4.761 8.025 8.217 1.607 2.586 2.368 4.461 3.335 6.83a107.86 107.86 0 0 0 1.945 4.556c2.119 4.602 8.66 9.42 12.192 11.54 4.826 2.892 13.786 3.698 18.701 3.916l.71.013c1.914 0 5.12-.288 9.569-.864v20.333c0 4.985-6.343 5.184-7.898 5.184-.198 0 3.22 1.177 3.22 1.177C100.677 253.696 114.06 256 128 256c13.94 0 27.321-2.304 39.878-6.42 0 0 3.719-1.305 3.52-1.28z"
        opacity={0.07}
      />
      <path
        fill="#fff"
        d="M209.561 123.738c0-14.784-5.004-27.047-13.548-36.66a30.614 30.614 0 0 0 2.374-8.377c1.1-8-.198-12.8-1.3-17.498-1.1-4.697-2.4-8-2.4-8s-5.9-.601-10.898 1.101c-4.999 1.702-9.3 3.002-15.501 6.7-2.9 1.729-5.818 3.623-8.128 5.16-9.875-2.74-20.736-4.148-32.16-4.148-11.526 0-22.483 1.414-32.429 4.173-2.317-1.543-5.254-3.45-8.173-5.19-6.201-3.7-10.502-5-15.5-6.701-4.999-1.703-10.9-1.101-10.9-1.101s-1.299 3.302-2.4 8c-1.1 4.697-2.4 9.497-1.299 17.497.493 3.597 1.491 6.439 2.445 8.532-8.384 9.555-13.3 21.74-13.3 36.505 0 38.291 20.686 55.77 58.375 60.384-4.397 4.646-7.347 10.598-8.34 17.222-2.476 1.088-5.33 2.112-8.076 2.522-7.065 1.069-14.534 0-18.131-2.131-3.597-2.131-7.866-6.931-11.066-11.603-2.7-3.943-6.598-8.519-10.13-10.132-4.666-2.13-9.204-2.93-11.732-2.534-2.534.403-3.731 2.266-3.2 3.603.531 1.331 3.066 3.335 5.734 4.8 2.67 1.466 6.804 5.466 9.204 9.331 2.675 4.314 3.2 6.804 5.465 11.732 1.594 3.468 7.047 7.801 10.931 10.13 3.335 2.004 9.997 3.143 17.204 3.47 2.49.115 8.37-.615 13.33-1.319v24c0 4.09-3.743 7.2-7.622 6.483 12.448 4.186 25.741 6.31 39.61 6.31 13.862 0 27.155-2.124 39.616-6.297-3.872.71-7.616-2.4-7.616-6.49v-37.145c0-8.506-3.373-16.192-8.787-21.92 37.414-4.493 58.348-21.555 58.348-60.41zM46.33 183.853c-.986-.506-1.517-1.44-1.184-2.1.332-.659 1.408-.78 2.393-.275.986.506 1.517 1.44 1.184 2.1-.333.659-1.408.78-2.393.275zm7.756 4.832c-.518.563-1.632.384-2.49-.397-.857-.78-1.132-1.875-.614-2.439.519-.563 1.632-.384 2.49.397.858.781 1.133 1.875.614 2.439zm4.826 8c-.653.46-1.76.032-2.47-.96-.71-.992-.756-2.176-.103-2.637.653-.46 1.76-.032 2.47.96.705.992.756 2.176.103 2.637zm6.931 6.022c-.441.717-1.696.749-2.797.077-1.1-.672-1.638-1.799-1.196-2.515.441-.717 1.696-.75 2.796-.077 1.101.672 1.639 1.798 1.197 2.515zm6.554 5.894c-1.363-.166-2.375-1.017-2.26-1.9.11-.884 1.306-1.46 2.663-1.293 1.363.166 2.374 1.017 2.26 1.9-.11.877-1.3 1.46-2.663 1.293zm10.566 1.53c-1.453-.083-2.585-.915-2.528-1.85.058-.934 1.28-1.632 2.733-1.548 1.453.083 2.586.915 2.528 1.85-.058.94-1.28 1.631-2.733 1.548zm9.971-.998c-1.548 0-2.803-.807-2.803-1.799 0-.992 1.255-1.798 2.803-1.798 1.55 0 2.804.806 2.804 1.798s-1.261 1.799-2.804 1.799z"
      />
    </g>
  </svg>
);

export const LinkedInSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 256 256"
    {...props}
  >
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
    >
      <path
        fill="#0288d1"
        d="M255.68 220.213c0 19.592-15.875 35.467-35.467 35.467H35.787C16.202 255.68.32 239.805.32 220.213V35.787C.32 16.195 16.202.32 35.787.32h184.426c19.592 0 35.467 15.875 35.467 35.467z"
      />
      <path
        fill="#fff"
        d="M42.88 92.533h35.467V213.12H42.88zm17.627-14.186h-.199c-10.583 0-17.428-7.888-17.428-17.74 0-10.066 7.058-17.727 17.833-17.727 10.789 0 17.435 7.66 17.634 17.726 0 9.846-6.845 17.74-17.84 17.74zM213.12 213.12h-35.467v-64.542c0-15.591-8.69-26.231-22.642-26.231-10.647 0-16.407 7.178-19.201 14.115-1.022 2.483-.717 9.35-.717 12.818v63.84H99.627V92.533h35.466v18.556c5.115-7.916 13.123-18.556 33.608-18.556 25.38 0 44.412 15.96 44.412 51.597l.007 68.99z"
      />
    </g>
  </svg>
);

export const TwitterSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fill="#03a9f4"
      strokeMiterlimit={10}
      d="M42 12.429a14.978 14.978 0 0 1-4.247 1.162 7.38 7.38 0 0 0 3.251-4.058 14.829 14.829 0 0 1-4.693 1.776A7.377 7.377 0 0 0 30.926 9c-4.08 0-7.387 3.278-7.387 7.32 0 .572.067 1.129.193 1.67a21.05 21.05 0 0 1-15.224-7.654 7.23 7.23 0 0 0-1 3.686c0 2.541 1.301 4.778 3.285 6.096a7.52 7.52 0 0 1-3.349-.914v.086c0 3.551 2.547 6.508 5.923 7.181a7.346 7.346 0 0 1-1.941.263c-.477 0-.942-.054-1.392-.135.94 2.902 3.667 5.023 6.898 5.086a14.925 14.925 0 0 1-9.174 3.134 14.61 14.61 0 0 1-1.761-.104A21.109 21.109 0 0 0 17.321 38c13.585 0 21.017-11.156 21.017-20.834 0-.317-.01-.633-.025-.945A14.532 14.532 0 0 0 42 12.429"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="matrix(7.09333 0 0 7.09333 -42.24 -42.24)"
    />
  </svg>
);

export const MediumSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 256 256"
    {...props}
  >
    <g
      fill="#424242"
      strokeMiterlimit={10}
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="matrix(5.81333 0 0 5.81333 -11.52 -11.52)"
    >
      <circle cx={14} cy={24} r={12} />
      <ellipse cx={34} cy={24} rx={6} ry={11} />
      <ellipse cx={44} cy={24} rx={2} ry={10} />
    </g>
  </svg>
);

export const PinterestSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 256 256"
    {...props}
  >
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="matrix(6.4 0 0 6.4 -25.6 -25.6)"
    >
      <circle cx={24} cy={24} r={20} fill="#e60023" />
      <path
        fill="#fff"
        d="M24.444 11.416c-8.632 0-13.215 5.795-13.215 12.103 0 2.934 1.561 6.586 4.06 7.749.378.176.581.1.668-.267.067-.279.404-1.637.555-2.269.049-.201.025-.374-.138-.573-.827-1.003-1.489-2.846-1.489-4.564 0-4.412 3.34-8.68 9.03-8.68 4.914 0 8.354 3.348 8.354 8.137 0 5.41-2.733 9.158-6.287 9.158-1.963 0-3.433-1.624-2.962-3.615.565-2.377 1.657-4.942 1.657-6.659 0-1.535-.823-2.817-2.53-2.817-2.007 0-3.618 2.076-3.618 4.857 0 1.77.598 2.969.598 2.969s-1.982 8.381-2.345 9.941c-.402 1.722-.246 4.142-.072 5.723.451.177.903.354 1.369.499.817-1.328 2.035-3.506 2.486-5.243.244-.936 1.247-4.754 1.247-4.754.652 1.244 2.556 2.297 4.583 2.297 6.032 0 10.379-5.547 10.379-12.44 0-6.609-5.392-11.552-12.33-11.552z"
      />
    </g>
  </svg>
);

export const DribbbleSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 256 256"
    {...props}
  >
    <g
      fill="none"
      // fillRule="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="matrix(6.4 0 0 6.4 -25.6 -25.6)"
    >
      <circle cx={24} cy={24} r={19.375} fill="#ed3675" fillRule="nonzero" />
      <path
        fill="#bd1949"
        fillRule="evenodd"
        d="M24 4C12.959 4 4 12.959 4 24s8.959 20 20 20c11.02 0 20-8.959 20-20S35.02 4 24 4zm13.21 9.219a17.003 17.003 0 0 1 3.861 10.629c-.564-.108-6.204-1.258-11.887-.542-.13-.282-.239-.586-.369-.889a51.49 51.49 0 0 0-1.128-2.473c6.291-2.56 9.155-6.248 9.523-6.725zM24 6.95c4.338 0 8.308 1.627 11.323 4.295-.304.434-2.885 3.883-8.959 6.16-2.798-5.141-5.9-9.349-6.377-10A17.413 17.413 0 0 1 24 6.95zm-7.267 1.605c.455.607 3.492 4.837 6.334 9.87-7.983 2.126-15.033 2.083-15.792 2.083 1.107-5.293 4.686-9.697 9.458-11.953zM6.907 24.022v-.521c.738.022 9.024.13 17.549-2.43a50.78 50.78 0 0 1 1.388 2.907c-.217.065-.456.13-.672.195-8.807 2.842-13.492 10.607-13.883 11.258a17.038 17.038 0 0 1-4.382-11.409zM24 41.093a16.963 16.963 0 0 1-10.477-3.601c.304-.629 3.774-7.31 13.406-10.672.043-.022.065-.022.109-.043 2.408 6.226 3.384 11.453 3.644 12.95A16.818 16.818 0 0 1 24 41.093zm9.523-2.928c-.174-1.041-1.085-6.03-3.319-12.169 5.358-.846 10.043.542 10.629.738-.737 4.75-3.471 8.849-7.31 11.431z"
      />
    </g>
  </svg>
);

export function LineMdSunnyFilledLoopToMoonAltFilledLoopTransition(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <g strokeDasharray={2}>
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="4;2"
            ></animate>
          </path>
          <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="4;2"
            ></animate>
          </path>
        </g>
        <path
          fill="currentColor"
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
          opacity={0}
        >
          <set attributeName="opacity" begin="0.5s" to={1}></set>
        </path>
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray={4}
        strokeDashoffset={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
          <animate
            id="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition0"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s;lineMdSunnyFilledLoopToMoonAltFilledLoopTransition0.begin+6s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition0.begin+2s;lineMdSunnyFilledLoopToMoonAltFilledLoopTransition0.begin+4s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition0.begin+1.2s;lineMdSunnyFilledLoopToMoonAltFilledLoopTransition0.begin+3.2s;lineMdSunnyFilledLoopToMoonAltFilledLoopTransition0.begin+5.2s"
            dur="0.4s"
            values="0;4"
          ></animate>
          <set
            attributeName="d"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition0.begin+1.8s"
            to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"
          ></set>
          <set
            attributeName="d"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition0.begin+3.8s"
            to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"
          ></set>
          <set
            attributeName="d"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition0.begin+5.8s"
            to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"
          ></set>
        </path>
        <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
          <animate
            id="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition1"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1s;lineMdSunnyFilledLoopToMoonAltFilledLoopTransition1.begin+6s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition1.begin+2s;lineMdSunnyFilledLoopToMoonAltFilledLoopTransition1.begin+4s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition1.begin+1.2s;lineMdSunnyFilledLoopToMoonAltFilledLoopTransition1.begin+3.2s;lineMdSunnyFilledLoopToMoonAltFilledLoopTransition1.begin+5.2s"
            dur="0.4s"
            values="0;4"
          ></animate>
          <set
            attributeName="d"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition1.begin+1.8s"
            to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"
          ></set>
          <set
            attributeName="d"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition1.begin+3.8s"
            to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"
          ></set>
          <set
            attributeName="d"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition1.begin+5.8s"
            to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"
          ></set>
        </path>
        <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
          <animate
            id="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition2"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="2.8s;lineMdSunnyFilledLoopToMoonAltFilledLoopTransition2.begin+6s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition2.begin+2s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition2.begin+1.2s;lineMdSunnyFilledLoopToMoonAltFilledLoopTransition2.begin+3.2s"
            dur="0.4s"
            values="0;4"
          ></animate>
          <set
            attributeName="d"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition2.begin+1.8s"
            to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"
          ></set>
          <set
            attributeName="d"
            begin="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition2.begin+5.8s"
            to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"
          ></set>
        </path>
      </g>
      <mask id="lineMdSunnyFilledLoopToMoonAltFilledLoopTransition3">
        <circle cx={12} cy={12} r={12} fill="#fff"></circle>
        <circle cx={22} cy={2} r={3} fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          ></animate>
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          ></animate>
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="3;12"
          ></animate>
        </circle>
        <circle cx={22} cy={2} r={1}>
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          ></animate>
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          ></animate>
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="1;10"
          ></animate>
        </circle>
      </mask>
      <circle
        cx={12}
        cy={12}
        r={6}
        fill="currentColor"
        mask="url(#lineMdSunnyFilledLoopToMoonAltFilledLoopTransition3)"
      >
        <set attributeName="opacity" begin="0.5s" to={0}></set>
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="6;10"
        ></animate>
      </circle>
    </svg>
  );
}

export function LineMdMoonFilledToSunnyFilledLoopTransition(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray={2}
        strokeDashoffset={2}
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.2s"
            dur="0.2s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.2s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.5s"
            dur="0.2s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.5s"
            dur="1.2s"
            values="2;0"
          ></animate>
        </path>
        <animateTransform
          attributeName="transform"
          dur="30s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </g>
      <g fill="currentColor">
        <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            dur="0.4s"
            values="1;0"
          ></animate>
        </path>
        <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.2s"
            dur="0.4s"
            values="1;0"
          ></animate>
        </path>
      </g>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"></path>
        <set attributeName="opacity" begin="0.6s" to={0}></set>
      </g>
      <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
        <circle cx={12} cy={12} r={12} fill="#fff"></circle>
        <circle cx={18} cy={6} r={12} fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
          ></animate>
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
          ></animate>
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="12;3"
          ></animate>
        </circle>
        <circle cx={18} cy={6} r={10}>
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
          ></animate>
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
          ></animate>
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="10;1"
          ></animate>
        </circle>
      </mask>
      <circle
        cx={12}
        cy={12}
        r={10}
        fill="currentColor"
        mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
        opacity={0}
      >
        <set attributeName="opacity" begin="0.6s" to={1}></set>
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;6"
        ></animate>
      </circle>
    </svg>
  );
}
