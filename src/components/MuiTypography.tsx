import { Typography } from '@mui/material'
import React from 'react'

const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>

      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta iste, dolorum, recusandae commodi magni nesciunt deserunt nemo quibusdam vel cupiditate, nihil eveniet! Sapiente iusto inventore, saepe sequi aspernatur tempora?</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore tenetur quibusdam dicta ducimus atque iure quae est totam non, mollitia eligendi officia molestiae aspernatur laudantium exercitationem, cupiditate porro hic?</Typography>
    </div>
  )
}

export default MuiTypography