import { Injectable } from "@nestjs/common";
import { Movie } from "./entities/movie.entity";

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }
  getOne(id: string): Movie {
    return this.movies.find((m) => m.id === parseInt(id));
  }
  remove(id: string): boolean {
    this.movies.filter((m) => m.id !== parseInt(id));
    return true;
  }
  create(movieData: Movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
