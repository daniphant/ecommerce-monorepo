export default interface IMapper<T, U> {
  toDomain(data: U): T;
  toPersistence(data: T): U;
}
