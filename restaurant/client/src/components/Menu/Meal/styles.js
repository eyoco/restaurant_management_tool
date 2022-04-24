import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '33.33%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    backgroundColor: 'lightYellow'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    padding: '0 16px',
    fontSize: 20,
    color: 'purple'
  },
  title: {
    padding: '0 16px',
    fontSize: 36,
    color: 'purple'
  },
  messa: {
    padding: '0 16px',
    fontSize: 20,
    color: 'purple'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'pink'
  },
});