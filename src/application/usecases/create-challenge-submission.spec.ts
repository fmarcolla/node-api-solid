import { InMemoryChallengesRepository } from '../../tests/repositories/in-memory-challenge-repository';
import { InMemoryStudentsRepository } from '../../tests/repositories/in-memory-students-respository';
import { CreateChallengeSubmission } from '../usecases/create-challenge-submission';
import { Student } from '../../domain/entities/student';
import { Challenge } from '../../domain/entities/challenge';

describe('Create challeng submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentsRepository = new InMemoryStudentsRepository();
        const challengesRepository = new InMemoryChallengesRepository();

        const student = Student.create({
            name: 'Felipe',
            email: 'felipe@teste.com'
        });

        const challenge = Challenge.create({
            title: 'Challenge 01',
            instructionsUrl: 'http://example.com'
        });

        studentsRepository.items.push(student);
        challengesRepository.items.push(challenge);

        const sut = new CreateChallengeSubmission(studentsRepository, challengesRepository);

        const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id
        });

        expect(response).toBeTruthy();
    });
});