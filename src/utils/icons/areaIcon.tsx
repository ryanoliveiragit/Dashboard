interface IconProps {
  color: string
}

export const IconArea = ({color}: IconProps) => {
  return (
    <svg
      width="23"
      height="9"
      viewBox="0 0 23 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4.5H21"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
      />
      <circle cx="11.5" cy="4.5" r="4.5" fill={color} />
    </svg>
  );
};
