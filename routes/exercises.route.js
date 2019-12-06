import { Router } from 'express';
import ExerciseController from './../controllers/exercise.controller';

const router = Router();

router.get( '/', ExerciseController.getAllExercises);
router.get( '/:id', ExerciseController.getSingleExercise);
router.delete( '/:id', ExerciseController.deleteExercise);
router.post( '/add', ExerciseController.createExercise);
router.patch( '/update/:id', ExerciseController.updateExercise);


export default router;