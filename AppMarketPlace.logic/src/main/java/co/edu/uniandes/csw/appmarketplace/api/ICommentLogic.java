/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uniandes.csw.appmarketplace.api;

import co.edu.uniandes.csw.appmarketplace.dtos.CommentDTO;

/**
 *
 * @author if.garcia11
 */
public interface ICommentLogic {
    
    public void InsertComment (CommentDTO dto);
}