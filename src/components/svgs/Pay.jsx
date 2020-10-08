import React from 'react';

const Pay = (props) => {
  const { height, color1, color2 } = props;
  return (
    <svg height={height} width={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path fill={color2} d='M235.246 91.922l60.395-30.198 42.235 16.894 64.264 42.023-44.862 5.347-47.851-10.694-41.128 8.228-2.737 41.119h43.865l90.466 8.227 47.108 49.347h59.813V103.959L430.792 44.83 287.194 11.043l-92.915 67.575z' />
      <path d='M278.097 164.641c-5.533 41.618-43.755 70.878-85.373 65.345-41.618-5.533-70.878-43.755-65.345-85.373 5.533-41.618 43.755-70.878 85.373-65.345a76.04 76.04 0 0159.035 43.552' fill={color1} />
      <path d='M0 449.901h93.059l136.012 51.061h42.919l150.355-131.307c-16.429-16.742-42.665-18.853-61.561-4.95l-95.923 70.599-93.059-43.772 46.306 4.899 39.591-4.899v-36.474h-42.944l-71.587-7.29-50.107 21.886H0v80.247z' fill={color2} />
      <path d='M236.513 139.63v-2.272c-1.098-13.371-11.944-23.854-25.341-24.496v-8.903h-16.894v8.878c-13.397.642-24.243 11.125-25.341 24.496 1.166 13.262 11.834 23.685 25.121 24.538l14.858 2.196c6.698.988 10.702 4.764 10.702 7.83 0 3.801-5.913 8.058-13.836 8.058h-6.116c-7.923.025-13.836-4.198-13.836-8.033v-2.272h-16.894v2.272c1.098 13.371 11.944 23.854 25.341 24.496v6.758h16.894v-6.758c13.397-.642 24.243-11.125 25.341-24.496-1.166-13.262-11.834-23.685-25.121-24.538l-14.858-2.196c-6.698-.988-10.702-4.764-10.702-7.83 0-3.801 5.913-8.058 13.836-8.058h6.116c7.923 0 13.836 4.223 13.836 8.058v2.272h16.894z' fill={color2} />
      <path fill={color2} d='M244.96 87.065l50.681-25.341 42.235 16.894 64.264 42.023-44.862 5.347-47.851-10.694-41.128 8.228-2.737 41.119h43.865l90.466 8.227 47.108 49.347h59.813V103.959L430.792 44.83 287.194 11.043z' />
      {/* eslint-disable-next-line max-len */}
      <path fill={color2} d='M430.792 369.968a8.474 8.474 0 00-2.407-6.234c-19.428-19.622-50.284-22.105-72.601-5.837l-91.885 67.626-44.177-20.779 39.025-4.823a8.44 8.44 0 007.408-8.379v-36.474a8.45 8.45 0 00-8.447-8.447h-42.522l-71.157-7.264a8.612 8.612 0 00-4.223.667L91.311 361.2H0v16.894h93.059a8.307 8.307 0 003.379-.71l48.071-20.991 69.383 7.078c.287 0 .574.042.845.042h34.506v20.56l-31.254 3.852-45.343-4.781c-4.637-.498-8.802 2.855-9.3 7.492a8.441 8.441 0 004.815 8.557l93.102 43.763a8.453 8.453 0 008.599-.845l95.931-70.599c12.789-9.351 29.978-9.993 43.434-1.63L268.848 492.516H230.6l-134.576-50.53a8.445 8.445 0 00-2.965-.541H0v16.894h91.522l134.576 50.538a8.437 8.437 0 002.965.532h42.927a8.453 8.453 0 005.558-2.086l150.355-131.315a8.436 8.436 0 002.889-6.04zM289.036 20.149l138.031 32.487 74.561 57.988L512 97.294l-76.022-59.128a8.681 8.681 0 00-3.252-1.563L289.129 2.815a8.439 8.439 0 00-6.901 1.394l-92.172 67.009c-46.095 7.019-77.779 50.073-70.76 96.168s50.073 77.779 96.168 70.76c34.43-5.237 62.102-31.085 69.695-65.066h23.499l87.316 7.932 44.954 47.032a8.448 8.448 0 006.116 2.619h59.77v-16.894h-56.197L406 167.04a8.486 8.486 0 00-5.338-2.585l-91.226-8.253h-34.852l1.689-25.67 33.027-6.605 46.112 10.297a8.436 8.436 0 002.838.152l44.861-5.347-2.002-16.784-43.417 5.178-46.458-10.373a8.15 8.15 0 00-3.497 0l-31.608 6.318a84.378 84.378 0 00-18.803-23.018l38.704-19.335 38.712 15.483 6.268-15.694-42.234-16.894a8.496 8.496 0 00-6.91.287l-50.681 25.341.118.245a84.272 84.272 0 00-23.237-7.991l70.97-51.643zm-28.407 99.901a8.264 8.264 0 00-.76 2.906l-2.745 41.128c-.313 4.654 3.21 8.683 7.864 8.996.194.017.389.017.583.017h2.129c-10.119 35.992-47.497 56.974-83.498 46.855-35.992-10.119-56.974-47.497-46.855-83.498 10.119-35.992 47.497-56.974 83.498-46.855a67.704 67.704 0 0139.802 30.46l-.018-.009z' />
      <path fill={color2} d='M194.279 103.959v8.878c-13.397.642-24.243 11.125-25.341 24.496 1.166 13.262 11.834 23.685 25.121 24.538l14.858 2.196c6.698.988 10.702 4.764 10.702 7.83 0 3.801-5.913 8.058-13.836 8.058h-6.116c-7.923.025-13.836-4.198-13.836-8.033v-2.272h-16.894v2.272c0 13.971 13.515 24.952 30.73 24.952h6.116c17.215 0 30.73-10.981 30.73-24.952-1.166-13.262-11.834-23.685-25.121-24.538l-14.858-2.196c-6.698-.988-10.702-4.764-10.702-7.83 0-3.801 5.913-8.058 13.836-8.058h6.116c7.923 0 13.836 4.223 13.836 8.058v2.272h16.894v-2.272c-1.098-13.371-11.944-23.854-25.341-24.496v-8.903h-16.894z' />
    </svg>
  );
};
export default Pay;