import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status';
import {Request, Response} from 'express';
import { productService } from './product.services';

const createProduct= catchAsync(async (req:Request, res:Response) => {
  const product = await productService.createProduct(req.body);
  sendResponse(res,{
    statusCode: httpStatus.OK,
    success:true,
    message: 'Product created',
    data: {product}
  });
})

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const product = await productService.getSingleProduct(id);
  sendResponse(res,{
    statusCode: httpStatus.OK,
    success:true,
    message: 'Product fetched',
    data: {product}
  });
})

export const productController={
  createProduct,
  getSingleProduct
}