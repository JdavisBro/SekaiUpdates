export default function JoinElements(
  element_array: React.ReactElement[] | string[],
  separator: React.ReactElement | string,
  span_wrap: Boolean = false,
): React.ReactElement {
  element_array = element_array.map((value) =>
    span_wrap ? <span>{value}</span> : <>{value}</>,
  );
  return element_array.reduce((accumulator, current) =>
    accumulator == null ? (
      current
    ) : (
      <>
        {accumulator}
        {span_wrap ? <span>{separator}</span> : separator}
        {current}
      </>
    ),
  );
}
