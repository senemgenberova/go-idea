import { createIcon } from "@chakra-ui/icon";

export default createIcon({
  displayName: "CircleCheckIcon",
  viewBox: "0 0 48 48",
  defaultProps: {
    fill: "none",
  },
  path: (
    <>
      <circle cx="24" cy="24" r="24" fill="#39AB44" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.7201 14.3961C35.4152 14.8356 35.6198 15.7511 35.177 16.441L24.1665 33.595C23.3464 34.8727 21.5066 34.9789 20.5427 33.8042L14.1067 25.9603C13.5862 25.326 13.6825 24.3932 14.3216 23.8767C14.9607 23.3602 15.9007 23.4557 16.4211 24.09L22.2045 31.1385L32.6596 14.8496C33.1024 14.1597 34.0249 13.9567 34.7201 14.3961Z"
        fill="white"
      />
    </>
  ),
});
