
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { serviceData } from '../../utils/dataSet';
import './services.scss';
import { Box } from '@mui/material';

export default function Services() {

  return (
    <div className='services-wrapper-box'>

      <Typography variant="body1" display="block" gutterBottom>
        POPULAR SERVICES
      </Typography>
      <Box className='btnWrapperBox'>
        {
          serviceData?.map((item, index) => {
            return (
              <Button key={`service-btn-${index}`} className='btn-services' variant="outlined" startIcon={item.icon}>

                {item?.category}
              </Button>
            )
          })
        }
      </Box>
    </div>
  )
}