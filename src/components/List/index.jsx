import styled from 'styled-components'

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const ListItem = styled.li`
  margin: 0;
  padding: 12px;
  background-color: lavender;
  margin-bottom: 20px;
  border-radius: 12px;
  ${(props) =>
    props.selected && {
      background: 'hotpink',
    }}
`
